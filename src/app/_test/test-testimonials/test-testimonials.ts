import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-test-testimonials',
  imports: [],
  templateUrl: './test-testimonials.html',
  styleUrl: './test-testimonials.scss'
})
export class TestTestimonials {
  

  slides = [
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

  // slides = [
  //   { img: 'https://picsum.photos/600/400?random=1' },
  //   { img: 'https://picsum.photos/600/400?random=2' },
  //   { img: 'https://picsum.photos/600/400?random=3' },
  //   { img: 'https://picsum.photos/600/400?random=4' },
  //   { img: 'https://picsum.photos/600/400?random=5' },
  // ];

  currentSlide = 0;
  autoPlayInterval: any;

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  get sliderTransform() {
    return `translateX(-${this.currentSlide * 100}%)`;
  }

  changeSlide(direction: number) {
    this.currentSlide += direction;

    if (this.currentSlide >= this.slides.length) {
      this.currentSlide = 0;
    } else if (this.currentSlide < 0) {
      this.currentSlide = this.slides.length - 1;
    }
  }

  goToSlide(slideIndex: number) {
    this.currentSlide = slideIndex;
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.changeSlide(1);
    }, 4000); // Change slide every 4 seconds
  }

  stopAutoPlay() {
    clearInterval(this.autoPlayInterval);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.changeSlide(-1);
      this.stopAutoPlay();
      this.startAutoPlay();
    } else if (event.key === 'ArrowRight') {
      this.changeSlide(1);
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }

}
