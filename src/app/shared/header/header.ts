import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  toggleNav() {
    let element = document.getElementById('nav');
    if(element) {
      element.classList.toggle('visible');
    }
  }  

}

