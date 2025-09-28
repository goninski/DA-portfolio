import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  isUnderConstructionClosed = false;

  closeUnderConstruction(): void {
    this.isUnderConstructionClosed = true;
  }

}
