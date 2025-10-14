import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplideCarousel } from './splide-carousel';

describe('SplideCarousel', () => {
  let component: SplideCarousel;
  let fixture: ComponentFixture<SplideCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplideCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplideCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
