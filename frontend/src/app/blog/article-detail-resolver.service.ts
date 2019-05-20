import { Injectable } from '@angular/core'
import { BlogArticleService } from '../blog-article.service'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs'
import { BlogArticleDetails } from './blog-article-details'

@Injectable({
  providedIn: 'root',
})
export class ArticleDetailResolverService implements Resolve<Object> {

  constructor(private blogArticleService: BlogArticleService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BlogArticleDetails> {
    return this.blogArticleService.getArticleDetails(route.params[ 'article-title' ])
  }
}
