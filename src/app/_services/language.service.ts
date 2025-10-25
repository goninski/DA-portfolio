import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { langRoutes } from '../_shared/footer/footer.data';

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

    /**
     * Automatically update the route when language changes
     */
    effect(() => {
      const currentLang = this.lang();
      const currentUrl = this.router.url;
      
      for (const pathGroup of Object.values(langRoutes)) {
        if (Object.values(pathGroup).includes(currentUrl)) {
          this.router.navigate([pathGroup[currentLang]]);
          break;
        }
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