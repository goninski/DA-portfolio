import { Component } from '@angular/core';
import { TestSlider } from '../../_test/test-slider/test-slider';
import { TestTestimonials } from "../../_test/test-testimonials/test-testimonials";

@Component({
  selector: 'app-test',
  imports: [TestSlider, TestTestimonials],
  templateUrl: './test.html',
  styleUrl: './test.scss'
})
export class Test {

}
