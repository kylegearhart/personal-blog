import { BlogArticleResolverService } from './blog-article-resolver.service'
import { instance, mock, verify, when } from 'ts-mockito'
import { asyncData } from '../../test-utilities/async-helper-functions'
import { BlogArticleService } from './blog-article.service'

describe('BlogArticleResolverService', () => {
  let subject: BlogArticleResolverService

  let spyBlogArticleService: BlogArticleService

  beforeEach(() => {
    spyBlogArticleService = mock(BlogArticleService)
  })

  describe('retrieving blog articles', () => {
    it('uses blog article service', async () => {
      subject = new BlogArticleResolverService(instance(spyBlogArticleService))

      await subject.resolve(null, null)

      verify(spyBlogArticleService.getArticles()).once()
    })

    it('always returns stub article titles retrieved from server', (done) => {
      when(spyBlogArticleService.getArticles())
        .thenReturn(asyncData([ { title: 'blog-article-title' } ]))
      subject = new BlogArticleResolverService(instance(spyBlogArticleService))

      subject.resolve(null, null).subscribe(actual => {
        expect(actual).toEqual([ { title: 'blog-article-title' } ])
        done()
      })
    })
  })
})
