import { Injectable } from '@angular/core';
import {AppModule} from './app.module'

@Injectable({ providedIn: AppModule })
export class BlogArticleService {
  getArticles(): { title: string }[] {
    return [
      { title: 'blog-title-1' },
      { title: 'blog-title-2' }
    ]
  }
}
