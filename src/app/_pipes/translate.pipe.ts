import { Pipe, PipeTransform, inject } from '@angular/core';
import { Language, LanguageService } from '../_services/language.service';

type Translatable = { [key in Language]: string };

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  lang = inject(LanguageService).lang;

  transform(value: Translatable | undefined): string {
    return value?.[this.lang()] ?? '';
  }
}