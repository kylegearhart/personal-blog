import { Injectable } from '@angular/core'
import { HttpService } from './http/http.service'
import { Observable } from 'rxjs'
import { environment } from '../environments/environment.local'
import { BlogArticle } from './blog/blog-article'

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
