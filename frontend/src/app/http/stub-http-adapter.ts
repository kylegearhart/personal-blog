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
        const bodyPreviewText = `
          This is some arbitrary text to serve as a body preview. I have nothing particular to use,
          so I'll just type whatever comes to my mind as it does. You know, this probably would serve
          as enough, but, just to make sure, I'll add this final sentence to round this off.
        `
        return asyncData([
          new BlogArticle('first-blog-article', bodyPreviewText),
          new BlogArticle('second-blog-article', bodyPreviewText),
          new BlogArticle('third-blog-article', bodyPreviewText),
          new BlogArticle('fourth-blog-article', bodyPreviewText),
          new BlogArticle('fifth-blog-article', bodyPreviewText),
          new BlogArticle('sixth-blog-article', bodyPreviewText),
        ])
    }

    return null
  }

  get(url: string, params: { params: object }): Observable<any> {
    return StubHttpAdapter.stubbedResponseForUrl(url)
  }
}
