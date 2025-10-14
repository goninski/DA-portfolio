import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOwlCarousel } from './ngx-owl-carousel';

describe('NgxOwlCarousel', () => {
  let component: NgxOwlCarousel;
  let fixture: ComponentFixture<NgxOwlCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxOwlCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxOwlCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
