import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BlogArticleDetailComponent } from './blog-article-detail.component'
import { DebugElement } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable, Observer } from 'rxjs'
import { instance, mock, when } from 'ts-mockito'
import { BlogArticleDetails } from '../model-objects'

describe('BlogArticleDetailComponent', () => {
  let fixture: ComponentFixture<BlogArticleDetailComponent>
  let subjectDebugElement: DebugElement
  let subjectHTMLElement: HTMLElement
  let activatedRouteStub: ActivatedRoute
  let activatedRouteDataObserver: Observer<{ articleDetails: BlogArticleDetails }>

  beforeEach(async () => {
    activatedRouteStub = mock(ActivatedRoute)
    when(activatedRouteStub.data).thenReturn(Observable.create(subscriber => {
      activatedRouteDataObserver = subscriber
    }))

    await TestBed.configureTestingModule({
      declarations: [BlogArticleDetailComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: () => instance(activatedRouteStub) },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(BlogArticleDetailComponent)
    subjectDebugElement = fixture.debugElement
    subjectHTMLElement = fixture.nativeElement
    fixture.detectChanges()
  })

  describe('article detail display', () => {
    it('displays the article title', () => {
      activatedRouteDataObserver.next(
        { articleDetails: { title: 'test-title', body: '' } },
      )
      fixture.detectChanges()

      expect(titleElement().innerText).toEqual('test-title')
    })

    it('displays the article body', () => {
      activatedRouteDataObserver.next(
        { articleDetails: { title: '', body: 'test-body' } },
      )
      fixture.detectChanges()

      expect(bodyElement().innerText).toEqual('test-body')
    })
  })

  function titleElement(): HTMLElement {
    return subjectHTMLElement.querySelector('.title')
  }

  function bodyElement(): HTMLElement {
    return subjectHTMLElement.querySelector('.body')
  }
})
