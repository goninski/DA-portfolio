import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

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
     * Check if the URL matches a localized route and update the language.
     * (for direct navigation to a localized URL)
     */
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const currentUrl = event.urlAfterRedirects;

        for (const pathGroup of Object.values(langRoutes)) {
          for (const [lang, path] of Object.entries(pathGroup)) {
            if (path === currentUrl && this.lang() !== lang) {
              this.lang.set(lang as Language);
              return;
            }
          }
        }
      });

    /**
     * Add language changes to localStorage automatically
     */  
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('lang', this.lang());
      }
    });

    /**
     * Update the route when language changes
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

  /**
   * Toggle language
   */
  toggleLang(): void {
    this.lang.update((current) => (current === 'en' ? 'de' : 'en'));
  }

  
}