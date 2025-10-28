import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Language, LanguageService } from '../_services/language.service';

type Translatable = { [key in Language]?: string };

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false,
})

export class TranslatePipe implements PipeTransform {
  private lang = inject(LanguageService).lang;
  private sanitizer = inject(DomSanitizer);

  transform(value: Translatable | undefined) {
    if (!value) {
      return '';
    }
    const currentLang = this.lang();
    let translation: string | undefined;

    translation = value[currentLang] ?? value['en'];
    return translation ?? '';
  }

}