import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class Testimonials {

  testimonials = [
    {
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae adipisci voluptatibus eius omnis numquam vel libero laudantium tempora sapiente consequatur? Sequi tempora, maxime vel ipsam sint est culpa. Dolor, sapiente.',
      author: 'Colleague A',
      active: false,
    },
    {
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      author: 'Colleague B',
      active: true,
    },
    {
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae adipisci voluptatibus eius omnis numquam vel libero laudantium tempora sapiente consequatur? Sequi tempora, maxime vel ipsam sint est culpa. Dolor, sapiente.',
      author: 'Colleague C',
      active: false,
    },
  ]
  
}
