import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { BlogArticleSummaryComponent } from './blog-article-summary.component'
import { Router } from '@angular/router'

describe('BlogArticleSummaryComponent', () => {
  let fixture: ComponentFixture<BlogArticleSummaryComponent>;
  let subjectHTMLElement: HTMLElement
  let subjectInstance: BlogArticleSummaryComponent

  beforeEach(async(() => {
    const spyRouter = {
      navigate: jasmine.createSpy(),
    }

    TestBed.configureTestingModule({
      declarations: [ BlogArticleSummaryComponent ],
      providers: [ { provide: Router, useValue: spyRouter } ],
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArticleSummaryComponent)
    subjectHTMLElement = fixture.nativeElement
    subjectInstance = fixture.componentInstance
  });

  it('displays its title', () => {
    subjectInstance.title = 'title'

    fixture.detectChanges()

    expect(subjectHTMLElement.innerText).toContain('title')
  })

  describe('when user clicks anywhere in the summary', () => {
    it('navigates to the respective article detail page', () => {
      const router = TestBed.get(Router)
      subjectInstance.title = 'article-title'
      fixture.detectChanges()
      const articleSummaryElement: HTMLElement = subjectHTMLElement.querySelector('.container')

      articleSummaryElement.click()

      expect(router.navigate).toHaveBeenCalledWith([ 'blog/article-title' ])
    })
  })
});
