import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteSlider } from './infinite-slider';

describe('InfiniteSlider', () => {
  let component: InfiniteSlider;
  let fixture: ComponentFixture<InfiniteSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfiniteSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfiniteSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
