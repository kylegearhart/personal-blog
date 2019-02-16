import { ComponentFixture, TestBed } from '@angular/core/testing'
import { BlogComponent } from './blog.component'
import { FakeBlogArticleSummaryComponent } from './blog-article-summary/fake-blog-article-summary'
import { instance, mock, when } from 'ts-mockito'
import { Observable, Observer } from 'rxjs'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

describe('BlogComponent', () => {
  let fixture: ComponentFixture<BlogComponent>
  let subjectDebugElement: DebugElement
  let activatedRouteStub: ActivatedRoute
  let activatedRouteDataObserver: Observer<{ blogArticles: { title: string }[] }>

  beforeEach(async () => {
    activatedRouteStub = mock(ActivatedRoute)
    when(activatedRouteStub.data).thenReturn(Observable.create(subscriber => {
      activatedRouteDataObserver = subscriber
    }))

    await TestBed.configureTestingModule({
      declarations: [ BlogComponent, FakeBlogArticleSummaryComponent ],
      providers: [
        { provide: ActivatedRoute, useFactory: () => instance(activatedRouteStub) },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(BlogComponent)
    subjectDebugElement = fixture.debugElement
    fixture.detectChanges()
  })

  describe('blog article display', () => {
    it('displays the articles retrieved in the active route data', () => {
      activatedRouteDataObserver.next({ blogArticles: [ { title: 'title-1' } ] })
      fixture.detectChanges()

      const articleElement = subjectDebugElement.query(
        By.directive(FakeBlogArticleSummaryComponent),
      )
      expect(articleElement.nativeElement.title).toEqual('title-1')
    })
  })
})
