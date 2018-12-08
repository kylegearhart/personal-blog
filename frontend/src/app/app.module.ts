import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogArticleSummaryComponent } from './blog-article-summary/blog-article-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogArticleSummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
