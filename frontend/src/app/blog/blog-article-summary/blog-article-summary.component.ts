import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { replaceSpacesWithHyphensForDisplayInURL } from '../blog-article-title-formatter'
import { BlogArticle } from '../model-objects'

@Component({
  selector: 'app-blog-article-summary',
  templateUrl: './blog-article-summary.component.html',
  styleUrls: ['./blog-article-summary.component.scss'],
})
export class BlogArticleSummaryComponent {
  @Input() article: BlogArticle

  constructor(private router: Router) {
  }

  navigateToArticleDetail(): void {
    this.router.navigate([this.getArticleDetailUrl()])
  }

  getArticleDetailUrl() {
    return 'blog/' + replaceSpacesWithHyphensForDisplayInURL(this.article.title)
  }
}
