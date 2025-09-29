import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './_shared/header/header';
import { Footer } from "./_shared/footer/footer";
import { BodyClassService } from './_services/body-class.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('da-portfolio');

  constructor(private bodyClassService: BodyClassService) {}

  ngOnInit() {
    this.bodyClassService.initRouteListener();
  }

}
