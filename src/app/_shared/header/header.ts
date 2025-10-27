import { Component,  HostListener, inject, signal, computed } from '@angular/core';

import { LanguageService } from '../../_services/language.service';
import { TranslatePipe } from '../../_pipes/translate.pipe';
import { data } from './header.data';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  data = data;
  languageService = inject(LanguageService);
  isLangDe = computed(() => this.languageService.lang() === 'de');
  isNavVisible = signal(false);

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.isNavVisible()) {
        this.closeNav();
    }
  }

  onLangSwitchChange(): void {
    this.languageService.toggleLang();
  }

  toggleNav(): void {
    this.isNavVisible.update(value => !value);
  }

  closeNav(): void {
    this.isNavVisible.set(false);
  }

}
