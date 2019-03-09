import { NO_ERRORS_SCHEMA } from '@angular/core'
import { AboutComponent } from './about/about.component'
import { RouterTestingModule } from '@angular/router/testing'
import { routes } from './app.module'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Router } from '@angular/router'
import { AppComponent } from './app.component'
import { BlogComponent } from './blog/blog.component'
import { Location } from '@angular/common'
import { BlogArticle, BlogArticleResolverService } from './blog/blog-article-resolver.service'
import { anything, instance, mock, when } from 'ts-mockito'
import { of } from 'rxjs'

describe('router', () => {
  let router: Router
  let location: Location
  let fixture: ComponentFixture<AppComponent>
  let stubBlogArticleResolverService: BlogArticleResolverService

  beforeEach(async () => {
    stubBlogArticleResolverService = mock(BlogArticleResolverService)
    const blogArticles: BlogArticle[] = [ { title: 'article-title' } ]
    when(stubBlogArticleResolverService.resolve(anything(), anything())).thenReturn(of(blogArticles))

    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes(routes) ],
      declarations: [
        AppComponent,
        AboutComponent,
        BlogComponent,
      ],
      providers: [
        { provide: BlogArticleResolverService, useValue: instance(stubBlogArticleResolverService) },
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
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
