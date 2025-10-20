import { Component } from '@angular/core';

import { Hero } from "../../hero/hero";
import { About } from "../../about/about";
import { Skills } from "../../skills/skills";
import { Portfolio } from "../../portfolio/portfolio";
import { Testimonials } from "../../testimonials/testimonials";
import { Contact } from "../../contact/contact";

@Component({
  selector: 'app-home',
  imports: [Hero, About, Skills, Portfolio, Testimonials, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
