import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogArticleSummaryComponent } from './blog/blog-article-summary/blog-article-summary.component';
import { BlogArticleService } from './blog-article.service';
import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component'
import { HttpClientModule } from '@angular/common/http'
import { HttpClientWrapper } from './http/http-client-wrapper'

export const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    BlogArticleSummaryComponent,
    AboutComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [BlogArticleService, HttpClientWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
