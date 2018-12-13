import { Component } from '@angular/core'
import { BlogArticleService } from '../blog-article.service'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  providers: [BlogArticleService]
})
export class BlogComponent {
  blogArticles: { title: string }[]

  constructor(private blogArticleService: BlogArticleService) {
    this.blogArticles = blogArticleService.getArticles()
  }
}
