import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-testimonials',
  imports: [],
  templateUrl: './test-testimonials.html',
  styleUrl: './test-testimonials.scss'
})
export class TestTestimonials implements OnInit {

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

  currentSlide = 0;

  ngOnInit() {
    this.currentSlide = this.testimonials.findIndex(t => t.active);
  }

  showSlide(index: number) {
    const newIndex = (index + this.testimonials.length) % this.testimonials.length;
    this.testimonials[this.currentSlide].active = false;
    this.testimonials[newIndex].active = true;
    this.currentSlide = newIndex;
  }

  nextSlide() {
    this.showSlide(this.currentSlide + 1);
  }

  prevSlide() {
    this.showSlide(this.currentSlide - 1);
  }

  jumpToSlide(index: number) {
    this.showSlide(index);
  }

  calculateTransform(): string {
    return `translateX(calc(50% - var(--slide-width) / 2 - (var(--slide-width) + var(--slide-gap)) * ${this.currentSlide}))`;
  }

}