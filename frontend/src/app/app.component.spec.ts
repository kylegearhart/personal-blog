import {} from 'jasmine'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { BlogArticleService } from './blog-article.service'
import { Component } from '@angular/core'

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>
  let subjectHTMLElement: HTMLElement
  let subjectInstance: AppComponent

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
    subjectInstance = fixture.componentInstance
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

  describe('link to resume', () => {
    it('has a title', () => {
      const resumeLink: HTMLElement = subjectHTMLElement.querySelector('a')

      expect(resumeLink.innerText).toEqual('Resume')
    })

    it('sends user to my LinkedIn profile', () => {
      fixture.detectChanges()

      const resumeLink: HTMLAnchorElement = subjectHTMLElement.querySelector('a')
      expect(resumeLink.href).toEqual(subjectInstance.linkedInProfileURL)
    })
  })
})

@Component({ selector: 'app-blog-article-summary', template: '' })
export class FakeBlogArticleSummaryComponent {}
