import { Injectable, signal } from '@angular/core';

export type Language = 'en' | 'de';

@Injectable({
  providedIn: 'root',
})

export class LanguageService {
  lang = signal<Language>('en');

  toggleLang(): void {
    this.lang.update((current) => (current === 'en' ? 'de' : 'en'));
  }
}