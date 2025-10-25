import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TranslatePipe } from '../../_pipes/translate.pipe';
import { data, langRoutes } from './footer.data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  data = data;
  langRoutes = langRoutes;
  isUnderConstructionClosed = (window.location.hostname == 'localhost');
  year = new Date().getFullYear();

  closeUnderConstruction(): void {
    this.isUnderConstructionClosed = true;
  }

}
