import { Component } from '@angular/core';

import { TranslatePipe } from '../_pipes/translate.pipe';
import { data } from './about.data';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  data = data;
}
