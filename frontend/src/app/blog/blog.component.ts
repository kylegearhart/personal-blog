import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { BlogArticle } from './blog-article-resolver.service'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
  blogArticles: { title: string }[] = []

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { blogArticles: BlogArticle[] }) => {
      this.blogArticles = data.blogArticles
    })
  }
}
