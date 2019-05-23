import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { BlogArticleSummaryComponent } from './blog-article-summary.component'
import { Router } from '@angular/router'

describe('BlogArticleSummaryComponent', () => {
  let fixture: ComponentFixture<BlogArticleSummaryComponent>
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
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArticleSummaryComponent)
    subjectHTMLElement = fixture.nativeElement
    subjectInstance = fixture.componentInstance
  })

  it('displays its title', () => {
    subjectInstance.title = 'title'

    fixture.detectChanges()

    expect(subjectHTMLElement.innerText).toContain('title')
  })

  describe('navigation to article detail screen', () => {
    let router: Router

    beforeEach(() => {
      router = TestBed.get(Router)
    })

    it('navigates to an article named _article-title_', () => {
      subjectInstance.title = 'article-title'
      fixture.detectChanges()

      getArticleSummaryElement().click()

      expect(router.navigate).toHaveBeenCalledWith([ 'blog/article-title' ])
    })

    it('navigates to an article named _different-article-title_', () => {
      subjectInstance.title = 'different-article-title'
      fixture.detectChanges()

      getArticleSummaryElement().click()

      expect(router.navigate).toHaveBeenCalledWith([ 'blog/different-article-title' ])
    })

    it('inserts hyphens for spaces in the article title in the URL', () => {
      subjectInstance.title = 'article title with spaces'
      fixture.detectChanges()

      getArticleSummaryElement().click()

      expect(router.navigate).toHaveBeenCalledWith([ 'blog/article-title-with-spaces' ])
    })
  })

  function getArticleSummaryElement(): HTMLElement {
    return subjectHTMLElement.querySelector('.container')
  }
})
