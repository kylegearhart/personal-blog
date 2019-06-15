import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { BlogArticleSummaryComponent } from './blog/blog-article-summary/blog-article-summary.component'
import { BlogArticleService } from './blog/blog-article.service'
import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from './about/about.component'
import { BlogComponent } from './blog/blog.component'
import { HttpClientModule } from '@angular/common/http'
import { BlogArticleResolverService } from './blog/blog-article-resolver.service'
import { BlogArticleDetailComponent } from './blog/blog-article-detail/blog-article-detail.component'
import { ArticleDetailResolverService } from './blog/blog-article-detail/article-detail-resolver.service'
import { HttpAdapterInterface } from './http/http.service'
import { HttpClientAdapter } from './http/http-client-adapter'

export const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent, resolve: { blogArticles: BlogArticleResolverService } },
  {
    path: 'blog/:article-title',
    component: BlogArticleDetailComponent,
    resolve: { articleDetails: ArticleDetailResolverService },
  },
]

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    BlogArticleDetailComponent,
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
    { provide: HttpAdapterInterface, useClass: HttpClientAdapter },
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
