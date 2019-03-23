import { Injectable } from '@angular/core'
import { HttpService } from './http/http.service'
import { Observable } from 'rxjs'
import { environment } from '../environments/environment.local'

@Injectable()
export class BlogArticleService {
  constructor(private httpService: HttpService) {
  }

  getArticles(): Observable<{ title: string }[]> {
    return this.httpService.get<{ title: string }[]>(
      environment.backendURL + '/api/blogArticles',
      {},
    )
  }

  getArticleDetails(articleTitle: string): Observable<ArticleDetails> {
    return this.httpService.get<ArticleDetails>(
      environment.backendURL + '/api/articleDetails',
      { articleTitle: articleTitle },
    )
  }
}

export interface ArticleDetails {
  title: string
  body: string
}
