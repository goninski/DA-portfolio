// body-class.service.ts

import { Injectable, Inject, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute, Data } from '@angular/router';
import { filter, map, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BodyClassService {
  private renderer: Renderer2;
  private currentBodyClass: string | null = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    rendererFactory: RendererFactory2,
    // Use DOCUMENT to access the native DOM body element
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  /**
   * Initializes the subscription to router events.
   * This should be called once in your main AppComponent.
   */
  public initRouteListener(): void {
    this.router.events
      .pipe(
        // 1. Only care about successful navigation events
        filter((event) => event instanceof NavigationEnd),
        // 2. Find the deepest activated route (where the 'data' is usually defined)
        map(() => this.getDeepestChild(this.activatedRoute)),
        // 3. Extract the 'data' property
        map((route) => route.snapshot.data),
        // 4. Only emit when the bodyClass is different
        distinctUntilChanged((prev, curr) => prev['bodyClass'] === curr['bodyClass'])
      )
      .subscribe((data: Data) => {
        const newClass = data['bodyClass'] as string;
        this.applyBodyClass(newClass);
      });
  }

  private getDeepestChild(route: ActivatedRoute): ActivatedRoute {
    let child = route.firstChild;
    while (child) {
      if (child.firstChild) {
        child = child.firstChild;
      } else {
        return child;
      }
    }
    return route;
  }

  private applyBodyClass(newClass: string): void {
    // 1. Remove the old class (if one exists)
    if (this.currentBodyClass) {
      this.renderer.removeClass(this.document.body, this.currentBodyClass);
    }

    // 2. Add the new class (if defined)
    if (newClass) {
      this.renderer.addClass(this.document.body, newClass);
      this.currentBodyClass = newClass;
    } else {
      this.currentBodyClass = null;
    }
  }
}