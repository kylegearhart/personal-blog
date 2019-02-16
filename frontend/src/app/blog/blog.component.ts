import { Component, OnInit } from '@angular/core'
import { BlogArticleService } from '../blog-article.service'
import { ActivatedRoute } from '@angular/router'
import { BlogArticle } from './blog-article-resolver.service'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  blogArticles: { title: string }[]

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.data.subscribe((data: { blogArticles: BlogArticle[] }) => {
      this.blogArticles = data.blogArticles
    })
  }
}
