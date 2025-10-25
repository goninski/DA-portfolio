import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { Language, LanguageService } from '../_services/language.service';

// type Translatable = { [key in Language]: string };

// Define the base language keys (e.g. en, de)
type BaseLanguageKeys = { [key in Language]?: string };

// Define the HTML-specific language keys (e.g. enHtml, deHtml)
type HtmlLanguageKeys = { [key in `${Language}Html`]? : string };

// Combine both types for the pipe's input
type TranslationData = BaseLanguageKeys & HtmlLanguageKeys;

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false,
})

export class TranslatePipe implements PipeTransform {
  private lang = inject(LanguageService).lang;
  private sanitizer = inject(DomSanitizer);

  transform(value: TranslationData | undefined, asHtml: boolean = false): string | SafeHtml {
    if (!value) {
      return '';
    }

    const currentLang = this.lang();
    let translation: string | undefined;

    /** 
     * If asHtml is true, prioritize looking for HTML-specific keys
     */
    if (asHtml) {
      const htmlKey = `${currentLang}Html` as keyof TranslationData;
      const enHtmlKey = 'enHtml' as keyof TranslationData;

      translation = value[htmlKey] ?? value[enHtmlKey];

      if (translation !== undefined) {
        return this.sanitizer.bypassSecurityTrustHtml(translation);
      }

      /** 
       * If no HTML-specific key found, fall back to plain text keys and sanitize them.
       * This ensures that [innerHTML] always receives SafeHtml, even if it's just plain text.
       */
      translation = value[currentLang] ?? value['en'];
      if (translation !== undefined) {
        return this.sanitizer.bypassSecurityTrustHtml(translation);
      }
    }

    /** 
     * proceed with plain text keys if asHtml is false or
     * ..if asHtml was true but no translation was found (even plain text fallback)
     */
    translation = value[currentLang] ?? value['en'];

    return translation ?? '';
  }
}