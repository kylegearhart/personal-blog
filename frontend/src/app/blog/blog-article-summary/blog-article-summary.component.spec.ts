import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { BlogArticleSummaryComponent } from './blog-article-summary.component'
import { Router } from '@angular/router'
import ModelObjectFixtures from '../../../test-utilities/model-object-fixtures'
import { endWith } from 'rxjs/operators'

describe('BlogArticleSummaryComponent', () => {
  let fixture: ComponentFixture<BlogArticleSummaryComponent>
  let subjectHTMLElement: HTMLElement
  let subjectInstance: BlogArticleSummaryComponent

  beforeEach(async(() => {
    const spyRouter = {
      navigate: jasmine.createSpy(),
    }

    TestBed.configureTestingModule({
      declarations: [BlogArticleSummaryComponent],
      providers: [{ provide: Router, useValue: spyRouter }],
    })
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArticleSummaryComponent)
    subjectHTMLElement = fixture.nativeElement
    subjectInstance = fixture.componentInstance
  })

  describe('article summary display', () => {
    it('displays its title and body preview', () => {
      subjectInstance.article = ModelObjectFixtures.blogArticle

      fixture.detectChanges()

      const { title, bodyPreview } = ModelObjectFixtures.blogArticle
      expect(subjectHTMLElement.innerText).toContain(title)
      expect(subjectHTMLElement.innerText).toContain(bodyPreview)
    })
  })

  describe('navigation to article detail screen', () => {
    beforeEach(() => {
      subjectInstance.article = ModelObjectFixtures.blogArticle
    })

    describe('when user clicks anywhere on the element', () => {
      let router: Router

      beforeEach(() => {
        router = TestBed.get(Router)
      })

      it('navigates to an article named _article-title_', () => {
        subjectInstance.article.title = 'article-title'
        fixture.detectChanges()

        getArticleSummaryElement().click()

        expect(router.navigate).toHaveBeenCalledWith(['blog/article-title'])
      })

      it('navigates to an article named _different-article-title_', () => {
        subjectInstance.article.title = 'different-article-title'
        fixture.detectChanges()

        getArticleSummaryElement().click()

        expect(router.navigate).toHaveBeenCalledWith(['blog/different-article-title'])
      })

      it('inserts hyphens for spaces in the article title in the URL', () => {
        subjectInstance.article.title = 'article title with spaces'
        fixture.detectChanges()

        getArticleSummaryElement().click()

        expect(router.navigate).toHaveBeenCalledWith(['blog/article-title-with-spaces'])
      })
    })

    describe('when user clicks on the Read More button', () => {
      it('navigates to an article named _article-title_', () => {
        subjectInstance.article.title = 'article-title'
        fixture.detectChanges()

        expect(getReadMoreButtonElement().href.endsWith('blog/article-title')).toBe(true)
      })

      it('navigates to an article named _different-article-title_', () => {
        subjectInstance.article.title = 'different-article-title'
        fixture.detectChanges()

        expect(getReadMoreButtonElement().href.endsWith('blog/different-article-title')).toBe(true)
      })

      it('inserts hyphens for spaces in the article title in the URL', () => {
        subjectInstance.article.title = 'article title with spaces'
        fixture.detectChanges()

        expect(getReadMoreButtonElement().href.endsWith('blog/article-title-with-spaces')).toBe(true)
      })
    })
  })

  function getArticleSummaryElement(): HTMLElement {
    return subjectHTMLElement.querySelector('.blog-article-summary')
  }

  function getReadMoreButtonElement(): HTMLAnchorElement {
    return subjectHTMLElement.querySelector('.read-more-button')
  }
})
