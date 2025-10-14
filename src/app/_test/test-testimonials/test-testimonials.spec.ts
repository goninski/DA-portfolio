import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTestimonials } from './test-testimonials';

describe('TestTestimonials', () => {
  let component: TestTestimonials;
  let fixture: ComponentFixture<TestTestimonials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestTestimonials]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestTestimonials);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});