import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticleSummaryComponent } from './blog-article-summary.component';

describe('BlogArticleSummaryComponent', () => {
  let fixture: ComponentFixture<BlogArticleSummaryComponent>;
  let subjectHTMLElement: HTMLElement
  let subjectInstance: BlogArticleSummaryComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogArticleSummaryComponent ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArticleSummaryComponent)
    subjectHTMLElement = fixture.nativeElement
    subjectInstance = fixture.componentInstance
  });

  it('displays its title', () => {
    subjectInstance.title = 'title'

    fixture.detectChanges()

    expect(subjectHTMLElement.innerText).toContain('title')
  })
});
