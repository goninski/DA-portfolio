import { Component } from '@angular/core';

import { TranslatePipe } from '../_pipes/translate.pipe';
import { data, skills, interested } from './skills.data';

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  data = data;
  skills = skills;
  interested = interested;
  imgUrl: string = 'assets/img/fgonin-skills.png';

}
