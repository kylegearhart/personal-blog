import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-blog-article-summary',
  templateUrl: './blog-article-summary.component.html',
})
export class BlogArticleSummaryComponent {
  @Input() title: string
}
