import { Component, output } from '@angular/core';

import { data } from './header.data';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  data = data;
  isNavVisible = false;

  toggleNav(): void {
    this.isNavVisible = !this.isNavVisible;
  }

  lang: 'en' | 'de' = 'en';

  onLangSwitchChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    checkbox.checked ? this.lang = 'de' : this.lang = 'en';
  }
  
}
