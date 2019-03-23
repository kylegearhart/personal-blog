import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { BlogArticleSummaryComponent } from './blog/blog-article-summary/blog-article-summary.component'
import { BlogArticleService } from './blog-article.service'
import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from './about/about.component'
import { BlogComponent } from './blog/blog.component'
import { HttpClientModule } from '@angular/common/http'
import { HttpClientWrapper } from './http/http-client-wrapper'
import { BlogArticleResolverService } from './blog/blog-article-resolver.service'
import { ArticleDetailComponent } from './blog/article-detail/article-detail.component'
import { ArticleDetailResolverService } from './blog/article-detail-resolver.service'

export const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent, resolve: { blogArticles: BlogArticleResolverService } },
  {
    path: 'blog/:article-title',
    component: ArticleDetailComponent,
    resolve: { articleDetails: ArticleDetailResolverService },
  },
]

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ArticleDetailComponent,
    BlogArticleSummaryComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    ArticleDetailResolverService,
    BlogArticleResolverService,
    BlogArticleService,
    HttpClientWrapper,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
