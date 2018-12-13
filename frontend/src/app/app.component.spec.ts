import {} from 'jasmine'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { Router, RouterModule } from '@angular/router'
import { routes } from './app.module'
import { BlogComponent } from './blog/blog.component'
import { AboutComponent } from './about/about.component'
import { FakeBlogArticleSummaryComponent } from './blog/blog.component.spec'

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
    const routerSpy = {
      navigate: jasmine.createSpy(),
    }

    TestBed.configureTestingModule({
      declarations: [ AppComponent, BlogComponent, AboutComponent, FakeBlogArticleSummaryComponent ],
      imports: [RouterModule.forRoot(routes)],
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
    describe('link to About page', () => {
      it('has a title', () => {
        const aboutButton: HTMLButtonElement = subjectHTMLElement.querySelector('nav button')

        expect(aboutButton.innerText).toEqual('About')
      })

      it('uses router to show About page', () => {
        const router = TestBed.get(Router)
        const aboutButton: HTMLButtonElement = subjectHTMLElement.querySelector('nav button')

        aboutButton.click()

        expect(router.navigate).toHaveBeenCalledWith([ 'about' ])
      })
    })

    describe('link to resume', () => {
      it('has a title', () => {
        const resumeLink: HTMLElement = subjectHTMLElement.querySelector('a')

        expect(resumeLink.innerText).toEqual('Resume')
      })

      it('sends user to my LinkedIn profile', () => {
        fixture.detectChanges()

        const resumeLink: HTMLAnchorElement = subjectHTMLElement.querySelector('nav a')
        expect(resumeLink.href).toEqual(subjectInstance.linkedInProfileURL)
      })
    })
  })
})
