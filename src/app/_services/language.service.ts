import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

export type Language = 'en' | 'de';

@Injectable({
  providedIn: 'root',
})

export class LanguageService {

  private platformId = inject(PLATFORM_ID);
  lang = signal<Language>('en');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const storedLang = localStorage.getItem('lang');
      if (storedLang && (storedLang === 'en' || storedLang === 'de')) {
        this.lang.set(storedLang as Language);
      }
    }
  }

  toggleLang(): void {
    this.lang.update((current) => (current === 'en' ? 'de' : 'en'));
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', this.lang());
    }
  }
}