import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs'
import { BlogArticleService } from './blog-article.service'
import { BlogArticle } from './model-objects'

@Injectable({
  providedIn: 'root',
})
export class BlogArticleResolverService implements Resolve<BlogArticle[]> {

  constructor(private blogArticleService: BlogArticleService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BlogArticle[]> {
    return this.blogArticleService.getArticles()
  }
}
