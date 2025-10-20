import { Component, computed, inject } from '@angular/core';

import { LanguageService } from '../../_services/language.service';
import { TranslatePipe } from '../../_pipes/translate.pipe';
import { data } from './header.data';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  data = data;
  languageService = inject(LanguageService);
  isLangDe = computed(() => this.languageService.lang() === 'de');
  isNavVisible = false;

  onLangSwitchChange(): void {
    this.languageService.toggleLang();
  }

  toggleNav(): void {
    this.isNavVisible = !this.isNavVisible;
  }

}
