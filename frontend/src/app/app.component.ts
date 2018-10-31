import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  blogArticles: { title: string }[]

  constructor() {
    this.blogArticles = [
      { title: 'article-title-1' },
      { title: 'article-title-2' }
    ]
  }
}
