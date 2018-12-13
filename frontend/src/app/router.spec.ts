import { Component, NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { AboutComponent } from './about/about.component'
import { RouterTestingModule } from '@angular/router/testing'
import { routes } from './app.module'
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing'
import { Router } from '@angular/router'
import { AppComponent } from './app.component'
import { BlogComponent } from './blog/blog.component'
import { BlogArticleService } from './blog-article.service'
import { Location } from '@angular/common'

describe('router', () => {
  let router: Router
  let location: Location
  let fixture: ComponentFixture<AppComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes(routes) ],
      declarations: [
        AppComponent,
        AboutComponent,
        BlogComponent,
      ],
      providers: [Location],
      schemas: [ NO_ERRORS_SCHEMA ],
    })

    router = TestBed.get(Router)
    location = TestBed.get(Location)
    fixture = TestBed.createComponent(AppComponent)

    fixture.ngZone.run(() => {
      router.initialNavigation()
    })
  })

  it('navigate to "" redirects you to /blog', () => {
    fixture.ngZone.run(() => {
      router.navigate([ '' ]).then(() => {
        expect(location.path()).toEqual('/blog')
      })
    })
  })

  it('can navigate to /blog', () => {
    fixture.ngZone.run(() => {
      router.navigate([ 'blog' ]).then(() => {
        expect(location.path()).toEqual('/blog')
      })
    })
  })

  it('can navigate to /about', () => {
    fixture.ngZone.run(() => {
      router.navigate([ 'about' ]).then(() => {
        expect(location.path()).toEqual('/about')
      })
    })
  })
})
