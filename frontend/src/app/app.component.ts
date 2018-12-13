import { Component } from '@angular/core'
import { BlogArticleService } from './blog-article.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  blogArticles: { title: string }[]
  linkedInProfileURL = 'https://www.linkedin.com/in/hunter-kyle-gearhart-1a486845'

  constructor(private blogArticleService: BlogArticleService) {
    this.blogArticles = blogArticleService.getArticles()
  }
}
