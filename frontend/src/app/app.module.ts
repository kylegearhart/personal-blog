import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogArticleSummaryComponent } from './blog-article-summary/blog-article-summary.component';
import { BlogArticleService } from './blog-article.service'

@NgModule({
  declarations: [
    AppComponent,
    BlogArticleSummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BlogArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
