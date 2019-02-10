import { ComponentFixture, TestBed } from '@angular/core/testing'
import { BlogComponent } from './blog.component'
import { BlogArticleService } from '../blog-article.service'
import { FakeBlogArticleSummaryComponent } from './blog-article-summary/fake-blog-article-summary'
import { instance, mock, verify, when } from 'ts-mockito'
import { Observable, Observer } from 'rxjs'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

describe('BlogComponent', () => {
  let fixture: ComponentFixture<BlogComponent>
  let subjectDebugElement: DebugElement
  let blogArticleServiceSpyStub: BlogArticleService
  let getArticlesObserver: Observer<{ title: string }[]>

  beforeEach(async () => {
    blogArticleServiceSpyStub = mock(BlogArticleService)
    when(blogArticleServiceSpyStub.getArticles())
      .thenReturn(Observable.create(subscriber => {
        getArticlesObserver = subscriber
      }))

    await TestBed.configureTestingModule({
      declarations: [ BlogComponent, FakeBlogArticleSummaryComponent ],
      providers: [
        { provide: BlogArticleService, useValue: instance(blogArticleServiceSpyStub) },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(BlogComponent)
    subjectDebugElement = fixture.debugElement
    fixture.detectChanges()
  })

  describe('blog article display', () => {
    it('fetches articles with service', () => {
      verify(blogArticleServiceSpyStub.getArticles()).called()
    })

    it('displays the returned articles', () => {
      getArticlesObserver.next([ { title: 'title-1' } ])
      fixture.detectChanges()

      const articleElement = subjectDebugElement.query(
        By.directive(FakeBlogArticleSummaryComponent),
      )
      expect(articleElement.nativeElement.title).toEqual('title-1')
    })
  })
})
