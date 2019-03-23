import { Injectable } from '@angular/core'
import { ArticleDetails, BlogArticleService } from '../blog-article.service'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ArticleDetailResolverService implements Resolve<Object> {

  constructor(private blogArticleService: BlogArticleService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ArticleDetails> {
    return this.blogArticleService.getArticleDetails(route.params[ 'article-title' ])
  }
}
