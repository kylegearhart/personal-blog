import { NO_ERRORS_SCHEMA } from '@angular/core'
import { AboutComponent } from './about/about.component'
import { RouterTestingModule } from '@angular/router/testing'
import { routes } from './app.module'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Router } from '@angular/router'
import { AppComponent } from './app.component'
import { BlogComponent } from './blog/blog.component'
import { Location } from '@angular/common'
import { BlogArticleService } from './blog-article.service'

describe('router', () => {
  let router: Router
  let location: Location
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes(routes) ],
      declarations: [
        AppComponent,
        AboutComponent,
        BlogComponent,
      ],
      providers: [
        BlogArticleService,
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
    it('redirects to /blog', () => {
      expect(router.url).toEqual('/')
    })

    it('shows the blog component', () => {
      expect(nameOfComponentShowedByRouter(fixture)).toBeUndefined()
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
