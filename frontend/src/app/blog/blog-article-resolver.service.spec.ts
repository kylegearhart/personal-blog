import { BlogArticleResolverService } from './blog-article-resolver.service'
import { HttpService } from '../http/http.service'
import { anyString, anything, instance, mock, verify, when } from 'ts-mockito'
import { asyncData, syncData } from '../../test-utilities/async-helper-functions'

describe('BlogArticleResolverService', () => {
  let httpServiceSpyStub: HttpService
  let subject: BlogArticleResolverService

  beforeEach(() => {
    httpServiceSpyStub = mock(HttpService)
  })

  describe('retrieving blog articles', () => {
    it('uses correct server URL', async () => {
      subject = new BlogArticleResolverService(instance(httpServiceSpyStub))

      await subject.resolve(null, null)

      verify(httpServiceSpyStub.get('/api/blogArticles')).once()
    })

    it('always returns stub article titles retrieved from server', (done) => {
      when(httpServiceSpyStub.get('/api/blogArticles'))
        .thenReturn(asyncData([ { title: 'blog-article-title' } ]))
      subject = new BlogArticleResolverService(instance(httpServiceSpyStub))

      subject.resolve(null, null).subscribe(actual => {
        expect(actual).toEqual([ { title: 'blog-article-title' } ])
        done()
      })
    })
  })
})
