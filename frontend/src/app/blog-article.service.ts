import { Injectable } from '@angular/core'
import { HttpService } from './http/http.service'
import { Observable } from 'rxjs'
import { environment } from '../environments/environment.local'
import { BlogArticle } from './blog/model-objects'
import { BlogArticleDetails } from './blog/model-objects'

@Injectable()
export class BlogArticleService {
  constructor(private httpService: HttpService) {
  }

  getArticles(): Observable<BlogArticle[]> {
    return this.httpService.get<BlogArticle[]>(
      environment.backendURL + '/api/blogArticles',
      {},
    )
  }

  getArticleDetails(articleTitle: string): Observable<BlogArticleDetails> {
    return this.httpService.get<BlogArticleDetails>(
      environment.backendURL + '/api/articleDetails',
      { articleTitle: articleTitle },
    )
  }
}
