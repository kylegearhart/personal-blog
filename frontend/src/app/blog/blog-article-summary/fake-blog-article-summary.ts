import { Component, Input } from '@angular/core'
import { BlogArticle } from '../model-objects'

@Component({ selector: 'app-blog-article-summary', template: '' })
export class FakeBlogArticleSummaryComponent {
  @Input() article: BlogArticle
}
