import { Component } from '@angular/core'
import { BlogArticleService } from './blog-article.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  blogArticles: { title: string }[]

  constructor(private blogArticleService: BlogArticleService) {
    this.blogArticles = blogArticleService.getArticles()
  }
}
