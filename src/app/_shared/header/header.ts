import { Component, computed, inject } from '@angular/core';

import { LanguageService } from '../../_services/language.service';
import { data } from './header.data';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  data = data;
  languageService = inject(LanguageService);
  lang = this.languageService.lang;
  isLangDe = computed(() => this.lang() === 'de');
  isNavVisible = false;

  onLangSwitchChange(): void {
    this.languageService.toggleLang();
  }

  toggleNav(): void {
    this.isNavVisible = !this.isNavVisible;
  }

}
