import { Component, computed, inject, HostListener, ElementRef, ViewChild, signal } from '@angular/core';

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

  @ViewChild('navMenu') navMenu!: ElementRef;
  @ViewChild('navToggle') navToggle!: ElementRef;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.isNavVisible()) {
      const clickedInsideNav = this.navMenu.nativeElement.contains(event.target);
      const clickedOnToggle = this.navToggle.nativeElement.contains(event.target);

      if (!clickedInsideNav && !clickedOnToggle) {
        this.closeNav();
      }
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
