import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TranslatePipe } from '../../_pipes/translate.pipe';
import { data, pathes } from './footer.data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  data = data;
  pathes = pathes;
  isUnderConstructionClosed = (window.location.hostname == 'localhost');
  year = new Date().getFullYear();

  closeUnderConstruction(): void {
    this.isUnderConstructionClosed = true;
  }

}
