import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ArticleDetails } from '../../blog-article.service'

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: [ './article-detail.component.css' ],
})
export class ArticleDetailComponent implements OnInit {
  articleDetails: ArticleDetails = { title: '', body: '' }

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { articleDetails: ArticleDetails }) => {
      this.articleDetails = data.articleDetails
    })
  }
}
