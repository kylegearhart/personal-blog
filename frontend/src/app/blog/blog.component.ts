import { Component, OnInit } from '@angular/core'
import { BlogArticleService } from '../blog-article.service'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  providers: [BlogArticleService]
})
export class BlogComponent implements OnInit {
  blogArticles: { title: string }[]

  constructor(private blogArticleService: BlogArticleService) {
  }

  ngOnInit(): void {
    this.blogArticleService.getArticles().subscribe((articles: { title: string }[]) => {
      this.blogArticles = articles
    })
  }
}
