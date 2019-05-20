import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { BlogArticle } from './blog-article'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
  blogArticles: BlogArticle[] = []

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { blogArticles: BlogArticle[] }) => {
      this.blogArticles = data.blogArticles
    })
  }
}
