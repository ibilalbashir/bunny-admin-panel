import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterContainerComponent } from './newsletter-container.component';

describe('NewsletterContainerComponent', () => {
  let component: NewsletterContainerComponent;
  let fixture: ComponentFixture<NewsletterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
