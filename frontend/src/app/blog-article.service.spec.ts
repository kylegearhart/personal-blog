import { BlogArticleService } from './blog-article.service'
import { fakeAsync, tick } from '@angular/core/testing'
import { HttpService } from './http/http.service'
import SpyObj = jasmine.SpyObj
import { asyncData } from '../test-utilities/async-helper-functions'

describe('BlogArticleService', () => {
  let httpServiceSpyStub: SpyObj<HttpService>
  let subject: BlogArticleService

  beforeEach(() => {
    httpServiceSpyStub = jasmine.createSpyObj<HttpService>('HttpService', [ 'get' ])
  })

  describe('retrieving blog articles', () => {
    it('uses correct server URL', fakeAsync(() => {
      subject = new BlogArticleService(httpServiceSpyStub)

      subject.getArticles()

      const serverURL: string = httpServiceSpyStub.get.calls.mostRecent().args[0]
      expect(serverURL).toEndWith('/api/blogArticles')
    }))

    it('always returns stub article titles retrieved from server', fakeAsync(() => {
      httpServiceSpyStub.get.and.returnValue(asyncData([ { title: 'blog-article-title' } ]))
      subject = new BlogArticleService(httpServiceSpyStub)

      subject.getArticles().subscribe((result) => {
        expect(result).toEqual([ { title: 'blog-article-title' } ])
      })

      tick()
    }))
  })
})
