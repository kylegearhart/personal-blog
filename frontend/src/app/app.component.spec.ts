import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { BlogArticleService } from './blog-article.service'
import { Component } from '@angular/core'

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>
  let subjectHTMLElement: HTMLElement

  beforeEach(async(() => {
    const blogArticleServiceSpyStub = {
      getArticles: jasmine.createSpy().and.returnValues(
        [ { title: 'title-1' } ],
      ),
    }

    TestBed.configureTestingModule({
      declarations: [ AppComponent, FakeBlogArticleSummaryComponent ],
      providers: [
        { provide: BlogArticleService, useValue: blogArticleServiceSpyStub },
      ],
    })
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent)
    subjectHTMLElement = fixture.nativeElement
  })

  describe('blog article display', () => {
    it('fetches articles with service', () => {
      const blogArticleService = TestBed.get(BlogArticleService)

      expect(blogArticleService.getArticles).toHaveBeenCalled()
    })

    it('displays the returned articles', () => {
      fixture.detectChanges()

      const articleElement: HTMLElement =
        subjectHTMLElement.querySelector('app-blog-article-summary')
      expect(articleElement.title).toBe('title-1')
    })
  })
})

@Component({ selector: 'app-blog-article-summary', template: '' })
export class FakeBlogArticleSummaryComponent {}
