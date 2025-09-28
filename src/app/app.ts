import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from "./hero/hero";
import { About } from "./about/about";
import { Skills } from "./skills/skills";
import { Portfolio } from "./portfolio/portfolio";
import { Testimonials } from "./testimonials/testimonials";
import { Contact } from "./contact/contact";
import { Footer } from "./shared/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, About, Skills, Portfolio, Testimonials, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('da-portfolio');
}
