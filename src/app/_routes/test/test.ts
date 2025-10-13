import { Component } from '@angular/core';
import { TestTestimonials } from "../../_test/test-testimonials/test-testimonials";
import { TestSlider } from '../../_test/test-slider/test-slider';
import { TestSlider2 } from '../../_test/test-slider-2/test-slider-2';
import { InfiniteSlider } from '../../_test/infinite-slider/infinite-slider';

@Component({
  selector: 'app-test',
  imports: [TestSlider, TestSlider2, TestTestimonials, InfiniteSlider],
  templateUrl: './test.html',
  styleUrl: './test.scss'
})
export class Test {

}
