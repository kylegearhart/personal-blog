// A dummy NgModule to be used to silence warnings produced
// when creating mock @Component classes without declaring them
// in an @NGModule. There should be no need to use this module.

import { Component, NgModule } from '@angular/core'
import { FakeBlogArticleSummaryComponent } from '../app/blog/blog-article-summary/fake-blog-article-summary'

@NgModule({
  declarations: [
    FakeBlogArticleSummaryComponent,
  ],
})
export class TestModule { }

