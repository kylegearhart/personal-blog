import { BlogArticleService } from './blog-article.service'
import { fakeAsync, tick } from '@angular/core/testing'
import { HttpService } from '../http/http.service'
import { asyncData } from '../../test-utilities/async-helper-functions'
import SpyObj = jasmine.SpyObj
import { BlogArticle } from './model-objects'

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

      const serverURL: string = httpServiceSpyStub.get.calls.mostRecent().args[ 0 ]
      expect(serverURL).toEndWith('/api/blogArticles')
    }))

    it('always returns stub articles retrieved from server', fakeAsync(() => {
      httpServiceSpyStub.get.and.returnValue(asyncData([
        { title: 'title', bodyPreview: 'body-preview' },
      ]))
      subject = new BlogArticleService(httpServiceSpyStub)

      subject.getArticles().subscribe((result) => {
        expect(result).toEqual([{ title: 'title', bodyPreview: 'body-preview' }])
      })

      tick()
    }))
  })

  describe('retrieving blog article details', () => {
    it('uses correct server URL', fakeAsync(() => {
      subject = new BlogArticleService(httpServiceSpyStub)

      subject.getArticleDetails('')

      const serverURL: string = httpServiceSpyStub.get.calls.mostRecent().args[ 0 ]
      expect(serverURL).toEndWith('/api/articleDetails')
    }))

    it('sends article title as query param', fakeAsync(() => {
      subject = new BlogArticleService(httpServiceSpyStub)

      subject.getArticleDetails('test-title')

      const queryParams: string = httpServiceSpyStub.get.calls.mostRecent().args[ 1 ]
      expect(queryParams[ 'articleTitle' ]).toEqual('test-title')
    }))

    it('always returns stub article details retrieved from server', fakeAsync(() => {
      const articleDetails = { title: 'blog-article-title', body: 'blog-article-title' }
      httpServiceSpyStub.get.and.returnValue(asyncData(articleDetails))
      subject = new BlogArticleService(httpServiceSpyStub)

      subject.getArticleDetails('').subscribe((result) => {
        expect(result).toEqual(articleDetails)
      })

      tick()
    }))
  })
})
