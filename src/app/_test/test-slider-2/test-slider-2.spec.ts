import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSlider2 } from './test-slider-2';

describe('TestSlider2', () => {
  let component: TestSlider2;
  let fixture: ComponentFixture<TestSlider2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestSlider2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSlider2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
