import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs'
import { HttpService } from '../http/http.service'

@Injectable({
  providedIn: 'root'
})
export class BlogArticleResolverService implements Resolve<BlogArticle[]> {

  constructor(private httpService: HttpService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BlogArticle[]> {
    return this.httpService.get<BlogArticle[]>('/api/blogArticles')
  }
}

export interface BlogArticle {
  title: string
}
