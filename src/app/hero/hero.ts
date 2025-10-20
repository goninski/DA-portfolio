import { Component, inject } from '@angular/core';

import { LanguageService } from '../_services/language.service';
import { data } from './hero.data';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  data = data;
  languageService = inject(LanguageService);
  lang = this.languageService.lang;
}
