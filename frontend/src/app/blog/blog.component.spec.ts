import {} from 'jasmine'
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing'
import { BlogComponent } from './blog.component'
import { BlogArticleService } from '../blog-article.service'
import { Component } from '@angular/core'
import { asyncData } from '../../test-utilities/async-helper-functions'
import { FakeBlogArticleSummaryComponent } from './blog-article-summary/fake-blog-article-summary'

describe('BlogComponent', () => {
  let fixture: ComponentFixture<BlogComponent>
  let subjectHTMLElement: HTMLElement
  let subjectInstance: BlogComponent

  beforeEach(async(() => {
    const blogArticleServiceSpyStub = jasmine.createSpyObj('BlogArticleService', [ 'getArticles' ])
    blogArticleServiceSpyStub.getArticles.and.returnValues(asyncData([ { title: 'title-1' } ]))

    TestBed.configureTestingModule({
      declarations: [ BlogComponent, FakeBlogArticleSummaryComponent ],
    })

    TestBed.overrideComponent(BlogComponent, {
      set: {
        providers: [
          { provide: BlogArticleService, useValue: blogArticleServiceSpyStub },
        ],
      },
    })
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent)
    subjectHTMLElement = fixture.nativeElement
    subjectInstance = fixture.componentInstance
  })

  describe('blog article display', () => {
    it('fetches articles with service', () => {
      fixture.detectChanges()

      const blogArticleService = fixture.debugElement.injector.get(BlogArticleService)

      expect(blogArticleService.getArticles).toHaveBeenCalled()
    })

    it('displays the returned articles', () => {
      fixture.detectChanges()

      fixture.whenStable().then(() => {
        fixture.detectChanges()

        const articleElement: HTMLElement =
          subjectHTMLElement.querySelector('app-blog-article-summary')
        expect(articleElement.title).toEqual('title-1')
      })
    })
  })
})
