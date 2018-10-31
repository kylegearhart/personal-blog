import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.css']
})
export class BlogArticleComponent implements OnInit {
  @Input() private title: string

  constructor() { }

  ngOnInit() {
  }

}
