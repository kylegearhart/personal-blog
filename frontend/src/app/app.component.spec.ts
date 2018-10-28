import {TestBed, async, ComponentFixture} from '@angular/core/testing'
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [],
      schemas: []
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
  })

  it('should create the app', async(() => {
    expect(fixture.nativeElement.querySelector('h1').textContent)
      .toContain('Kyle Gearhart');
  }));
});
