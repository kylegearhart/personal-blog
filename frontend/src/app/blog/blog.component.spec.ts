import { ComponentFixture, TestBed } from '@angular/core/testing'
import { BlogComponent } from './blog.component'
import { FakeBlogArticleSummaryComponent } from './blog-article-summary/fake-blog-article-summary'
import { instance, mock, when } from 'ts-mockito'
import { Observable, Observer } from 'rxjs'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import ModelObjectFixtures from '../../test-utilities/model-object-fixtures'
import { BlogArticle } from './model-objects'

describe('BlogComponent', () => {
  let fixture: ComponentFixture<BlogComponent>
  let subjectDebugElement: DebugElement
  let activatedRouteStub: ActivatedRoute
  let activatedRouteDataObserver: Observer<{ blogArticles: BlogArticle[] }>

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
      activatedRouteDataObserver.next({
        blogArticles: [
          ModelObjectFixtures.blogArticle,
          ModelObjectFixtures.blogArticle,
          ModelObjectFixtures.blogArticle,
        ],
      })
      fixture.detectChanges()

      const articleElement = subjectDebugElement.queryAll(By.directive(FakeBlogArticleSummaryComponent))
      expect(articleElement[ 0 ].componentInstance.article).toEqual(ModelObjectFixtures.blogArticle)
      expect(articleElement[ 1 ].componentInstance.article).toEqual(ModelObjectFixtures.blogArticle)
      expect(articleElement[ 2 ].componentInstance.article).toEqual(ModelObjectFixtures.blogArticle)
    })
  })
})
