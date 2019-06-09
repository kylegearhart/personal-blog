import { AboutComponent } from './about.component'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

describe('AboutComponent', () => {
  let fixture: ComponentFixture<AboutComponent>
  let subjectHTMLElement: HTMLElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ],
    })
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent)
    subjectHTMLElement = fixture.nativeElement
  })

  it('displays my About blurb', () => {
    const aboutElement: HTMLElement = subjectHTMLElement.querySelector('.about')

    fixture.detectChanges()

    expect(aboutElement.innerText).toContain('Kyle Gearhart')
  })
})
