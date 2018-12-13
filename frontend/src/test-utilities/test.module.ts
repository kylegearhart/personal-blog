// A dummy NgModule to be used to silence warnings produced
// when creating mock @Component classes without declaring them
// in an @NGModule. There should be no need to use this module.

import { NgModule } from '@angular/core'
import { FakeBlogArticleSummaryComponent } from '../app/blog/blog.component.spec'

@NgModule({
  declarations: [
    FakeBlogArticleSummaryComponent,
  ],
})
export class TestModule { }
