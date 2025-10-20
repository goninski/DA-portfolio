import { Component } from '@angular/core';

import { data } from './hero.data';
import { TranslatePipe } from '../_pipes/translate.pipe';

@Component({
  selector: 'app-hero',
  imports: [TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  data = data;
}
