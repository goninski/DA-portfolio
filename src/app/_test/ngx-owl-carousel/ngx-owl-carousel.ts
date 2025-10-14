import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-ngx-owl-carousel',
  imports: [CarouselModule],
  templateUrl: './ngx-owl-carousel.html',
  styleUrl: './ngx-owl-carousel.scss'
})

export class NgxOwlCarousel {
  
  slides = [
    {
      id: '1',
      content: 'This is the first slide content. Using ngx-owl-carousel-o is efficient and powerful.',
      author: 'Colleague A',
    },
    {
      id: '2',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae adipisci voluptatibus eius omnis numquam vel libero laudantium tempora sapiente consequatur? Sequi tempora.',
      author: 'Colleague B',
    },
    {
      id: '3',
      content: 'The responsive options make it easy to create sliders that work on any device.',
      author: 'Colleague C',
    },
    {
      id: '4',
      content: 'Another testimonial slide to demonstrate the infinite loop feature.',
      author: 'Colleague D',
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<img src="assets/icons/arrow-backward.svg">', '<img src="assets/icons/arrow-forward.svg">'],
    center: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 20,
      },
      600: {
        items: 1,
        stagePadding: 100,
      },
      1000: {
        items: 3,
        stagePadding: 0,
      }
    },
    nav: false // We will use custom navigation controls
  };
}