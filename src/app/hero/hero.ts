import { Component } from '@angular/core';

import { data } from './hero.data';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  data = data;
}
