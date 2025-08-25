import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contactform } from "./contactform/contactform";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contactform],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('da-portfolio');
}
