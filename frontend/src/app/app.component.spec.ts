import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { Router, RouterModule } from '@angular/router'
import { routes } from './app.module'
import { BlogComponent } from './blog/blog.component'
import { AboutComponent } from './about/about.component'
import { FakeBlogArticleSummaryComponent } from './blog/blog-article-summary/fake-blog-article-summary'
import { BlogArticleDetailComponent } from './blog/blog-article-detail/blog-article-detail.component'
import ModelObjectFixtures from '../test-utilities/model-object-fixtures'

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>
  let subjectHTMLElement: HTMLElement
  let subjectInstance: AppComponent

  beforeEach(async(() => {
    const blogArticleServiceSpyStub = {
      getArticles: jasmine.createSpy().and.returnValues(
        [ ModelObjectFixtures.blogArticle ],
      ),
    }
    const routerSpy = {
      navigate: jasmine.createSpy(),
    }

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BlogArticleDetailComponent,
        BlogComponent,
        AboutComponent,
        FakeBlogArticleSummaryComponent,
      ],
      imports: [ RouterModule.forRoot(routes) ],
      providers: [
        { provide: Router, useValue: routerSpy },
      ],
    })
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent)
    subjectHTMLElement = fixture.nativeElement
    subjectInstance = fixture.componentInstance
  })

  describe('main navigation', () => {
    let blogTitleElement: HTMLElement

    beforeEach(() => {
      blogTitleElement = subjectHTMLElement.querySelector('.title')
    })

    describe('blog title', () => {
      it('contains title text', () => {
        expect(blogTitleElement.innerText).toEqual('Hello World')
      })

      it('navigates to whatever the main contents of the site are', () => {
        const router = TestBed.get(Router)

        blogTitleElement.click()

        expect(router.navigate).toHaveBeenCalledWith([ '' ])
      })
    })

    describe('link to About page', () => {
      let aboutElement: HTMLButtonElement

      beforeEach(() => {
        aboutElement = subjectHTMLElement.querySelector('.about')
      })

      it('has a title', () => {
        expect(aboutElement.innerText).toEqual('About')
      })

      it('uses router to show About page', () => {
        const router = TestBed.get(Router)

        aboutElement.click()

        expect(router.navigate).toHaveBeenCalledWith([ 'about' ])
      })
    })

    describe('link to resume', () => {
      let resumeElement: HTMLAnchorElement

      beforeEach(() => {
        resumeElement = subjectHTMLElement.querySelector('.resume')
      })

      it('has a title', () => {
        expect(resumeElement.innerText).toEqual('Resume')
      })

      it('sends user to my LinkedIn profile', () => {
        fixture.detectChanges()

        expect(resumeElement.href).toEqual(subjectInstance.linkedInProfileURL)
      })
    })
  })
})
