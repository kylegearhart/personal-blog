import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { BlogArticleDetails } from '../model-objects'

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: [ './article-detail.component.css' ],
})
export class ArticleDetailComponent implements OnInit {
  articleDetails: BlogArticleDetails = new BlogArticleDetails('', '')

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { articleDetails: BlogArticleDetails }) => {
      this.articleDetails = data.articleDetails
    })
  }
}
