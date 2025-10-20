import { Component, effect, inject, Renderer2, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { BodyClassService } from './_services/body-class.service';
import { LanguageService } from './_services/language.service';
import { Header } from './_shared/header/header';
import { Footer } from "./_shared/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private bodyClassService = inject(BodyClassService);
  private languageService = inject(LanguageService);
  private renderer = inject(Renderer2);
  private document = inject(DOCUMENT);

  constructor() {
    effect(() => {
      this.renderer.setAttribute(this.document.documentElement, 'lang', this.languageService.lang());
    });
  }

  ngOnInit() {
    this.bodyClassService.initRouteListener();
  }

}
