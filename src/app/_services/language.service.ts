import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

export type Language = 'en' | 'de';

@Injectable({
  providedIn: 'root',
})

export class LanguageService {

  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  lang = signal<Language>('en');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const storedLang = localStorage.getItem('lang');
      if (storedLang && (storedLang === 'en' || storedLang === 'de')) {
        this.lang.set(storedLang as Language);
      }
    }

    // Automatically update the route when the language changes
    effect(() => {
      const currentLang = this.lang();
      const currentUrl = this.router.url;

      if (currentLang === 'de' && currentUrl === '/legal-notice') {
        this.router.navigate(['/impressum']);
      } else if (currentLang === 'en' && currentUrl === '/impressum') {
        this.router.navigate(['/legal-notice']);
      }
    });
  }

  toggleLang(): void {
    this.lang.update((current) => (current === 'en' ? 'de' : 'en'));
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', this.lang());
    }
  }
  
}