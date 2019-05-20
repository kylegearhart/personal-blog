import { ArticleDetailResolverService } from './article-detail-resolver.service'
import { BlogArticleService } from '../blog-article.service'
import { anyString, instance, mock, verify, when } from 'ts-mockito'
import { ActivatedRouteSnapshot } from '@angular/router'
import { asyncData } from '../../test-utilities/async-helper-functions'
import { BlogArticleDetails } from './model-objects'

describe('ArticleDetailResolverService', () => {
  let subject: ArticleDetailResolverService

  let spyBlogArticleService: BlogArticleService
  let stubActivatedRouteSnapshot: ActivatedRouteSnapshot

  beforeEach(() => {
    spyBlogArticleService = mock(BlogArticleService)
    stubActivatedRouteSnapshot = new ActivatedRouteSnapshot()
    stubActivatedRouteSnapshot.params = { 'article-title': '' }
  })

  describe('retrieving blog articles', () => {
    it('uses article title found in route to retrieve details using service', async () => {
      stubActivatedRouteSnapshot.params = { 'article-title': 'test-title' }
      subject = new ArticleDetailResolverService(instance(spyBlogArticleService))

      await subject.resolve(stubActivatedRouteSnapshot, null)

      verify(spyBlogArticleService.getArticleDetails('test-title')).once()
    })

    it('always returns stub article titles retrieved from server', (done) => {
      const articleDetails: BlogArticleDetails = new BlogArticleDetails(
        'blog-article-title',
        'blog-article-body',
      )
      when(spyBlogArticleService.getArticleDetails(anyString()))
        .thenReturn(asyncData(articleDetails))
      subject = new ArticleDetailResolverService(instance(spyBlogArticleService))

      subject.resolve(stubActivatedRouteSnapshot, null).subscribe(actual => {
        expect(actual).toEqual(articleDetails)
        done()
      })
    })
  })
})
