import { HttpAdapterInterface } from './http.service'
import { asyncData } from '../../test-utilities/async-helper-functions'
import { BlogArticle, BlogArticleDetails } from '../blog/model-objects'
import { Observable } from 'rxjs'

export class StubHttpAdapter implements HttpAdapterInterface {
  static stubbedResponseForUrl(url: string) {
    console.log('returning stubbed response for ' + url)

    const lastUrlPathElement = url.split('/').pop()

    switch (lastUrlPathElement) {
      case 'articleDetails':
        return asyncData(new BlogArticleDetails('title', 'body'))
      case 'blogArticles':
        return asyncData([
          new BlogArticle('first-blog-article'),
          new BlogArticle('second-blog-article'),
          new BlogArticle('third-blog-article'),
          new BlogArticle('fourth-blog-article'),
          new BlogArticle('fifth-blog-article'),
          new BlogArticle('sixth-blog-article'),
        ])
    }

    return null
  }

  get(url: string, params: { params: object }): Observable<any> {
    return StubHttpAdapter.stubbedResponseForUrl(url)
  }
}
