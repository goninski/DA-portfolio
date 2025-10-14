import { Component } from '@angular/core';
import { TestTestimonials } from "../../_test/test-testimonials/test-testimonials";
import { TestSlider } from '../../_test/test-slider/test-slider';
import { TestSlider2 } from '../../_test/test-slider-2/test-slider-2';
import { InfiniteSlider } from '../../_test/infinite-slider/infinite-slider';
import { SplideCarousel } from '../../_test/splide-carousel/splide-carousel';
// import { NgxOwlCarousel } from "../../_test/ngx-owl-carousel/ngx-owl-carousel";

@Component({
  selector: 'app-test',
  imports: [TestSlider, TestSlider2, TestTestimonials, InfiniteSlider, SplideCarousel],
  templateUrl: './test.html',
  styleUrl: './test.scss'
})
export class Test {

}
