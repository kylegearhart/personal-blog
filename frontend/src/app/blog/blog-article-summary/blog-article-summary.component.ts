import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-blog-article-summary',
  templateUrl: './blog-article-summary.component.html',
})
export class BlogArticleSummaryComponent {
  @Input() title: string

  constructor(private router: Router) {

  }

  navigateToArticleDetail(): void {
    this.router.navigate([ 'blog/article-title' ])
  }
}
