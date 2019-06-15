import { NO_ERRORS_SCHEMA } from '@angular/core'
import { AboutComponent } from './about/about.component'
import { RouterTestingModule } from '@angular/router/testing'
import { routes } from './app.module'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Router } from '@angular/router'
import { AppComponent } from './app.component'
import { BlogComponent } from './blog/blog.component'
import { Location } from '@angular/common'
import { BlogArticleResolverService } from './blog/blog-article-resolver.service'
import { anything, capture, instance, mock, verify, when } from 'ts-mockito'
import { of } from 'rxjs'
import { BlogArticleDetailComponent } from './blog/blog-article-detail/blog-article-detail.component'
import { ArticleDetailResolverService } from './blog/blog-article-detail/article-detail-resolver.service'

describe('router', () => {
  let router: Router
  let location: Location
  let fixture: ComponentFixture<AppComponent>
  let stubBlogArticleResolverService: BlogArticleResolverService
  let spyArticleDetailResolverService: ArticleDetailResolverService

  beforeEach(async () => {
    stubBlogArticleResolverService = mock(BlogArticleResolverService)
    when(stubBlogArticleResolverService.resolve(anything(), anything())).thenReturn(of([]))
    spyArticleDetailResolverService = mock(ArticleDetailResolverService)

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        AppComponent,
        AboutComponent,
        BlogArticleDetailComponent,
        BlogComponent,
      ],
      providers: [
        { provide: BlogArticleResolverService, useValue: instance(stubBlogArticleResolverService) },
        {
          provide: ArticleDetailResolverService,
          useValue: instance(spyArticleDetailResolverService),
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()

    router = TestBed.get(Router)
    location = TestBed.get(Location)
    fixture = TestBed.createComponent(AppComponent)

    await fixture.ngZone.run(() => {
      router.initialNavigation()
      fixture.detectChanges()
    })
  })

  afterEach(() => {
    TestBed.resetTestingModule()
  })

  describe('initial page or navigation to /', () => {
    it('reroutes to /blog route', () => {
      expect(router.url).toEqual('/blog')
    })
  })

  describe('navigation to /blog', () => {
    beforeEach(async () => {
      await fixture.ngZone.run(async () => {
        await router.navigateByUrl('/blog')
      })
    })

    it('shows route /blog', async () => {
      expect(router.url).toEqual('/blog')
    })

    it('shows the blog component', async () => {
      expect(nameOfComponentShowedByRouter(fixture)).toEqual('app-blog')
    })
  })

  describe('navigation to a particular blog post (/blog/:article-title)', () => {
    beforeEach(async () => {
      await fixture.ngZone.run(async () => {
        await router.navigateByUrl('/blog/test-title')
      })
    })

    it('shows route /blog/test-title', async () => {
      expect(router.url).toEqual('/blog/test-title')
    })

    it('shows the blog detail component', async () => {
      expect(nameOfComponentShowedByRouter(fixture)).toEqual('app-blog-article-detail')
    })

    it('resolves article details using the article title in the url path', () => {
      verify(spyArticleDetailResolverService.resolve(anything(), anything())).once()
      const [route] = capture(spyArticleDetailResolverService.resolve).last()
      expect(route.params['article-title']).toEqual('test-title')
    })
  })

  describe('navigation to /about', () => {
    beforeEach(async () => {
      await fixture.ngZone.run(async () => {
        await router.navigateByUrl('/about')
      })
    })

    it('shows route /about', async () => {
      expect(router.url).toEqual('/about')
    })

    it('shows the about component', async () => {
      expect(nameOfComponentShowedByRouter(fixture)).toEqual('app-about')
    })
  })

  function nameOfComponentShowedByRouter(componentFixture: ComponentFixture<AppComponent>): string {
    const sibling = componentFixture.nativeElement.querySelector('router-outlet').nextSibling
    return sibling ? sibling.localName : undefined
  }
})
