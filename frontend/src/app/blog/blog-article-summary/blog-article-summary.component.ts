import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { replaceSpacesWithHyphensForDisplayInURL } from '../blog-article-title-formatter'

@Component({
  selector: 'app-blog-article-summary',
  templateUrl: './blog-article-summary.component.html',
})
export class BlogArticleSummaryComponent {
  @Input() title: string

  constructor(private router: Router) {

  }

  navigateToArticleDetail(): void {
    this.router.navigate([ 'blog/' + replaceSpacesWithHyphensForDisplayInURL(this.title) ])
  }
}
