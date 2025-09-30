import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSlider } from './test-slider';

describe('TestSlider', () => {
  let component: TestSlider;
  let fixture: ComponentFixture<TestSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
