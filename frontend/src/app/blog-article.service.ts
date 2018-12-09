import { Injectable } from '@angular/core'

@Injectable()
export class BlogArticleService {
  getArticles(): { title: string }[] {
    return [
      { title: 'blog-title-1' },
      { title: 'blog-title-2' },
    ]
  }
}
