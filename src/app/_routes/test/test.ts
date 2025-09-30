import { Component } from '@angular/core';
import { TestSlider } from '../../_test/test-slider/test-slider';

@Component({
  selector: 'app-test',
  imports: [TestSlider],
  templateUrl: './test.html',
  styleUrl: './test.scss'
})
export class Test {

}
