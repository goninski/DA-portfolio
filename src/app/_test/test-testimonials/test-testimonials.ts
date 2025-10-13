import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

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

  currentSlide = 0;
  displayIndex = 1;
  autoPlayInterval: any;
  transitioning = false;
  transitionDuration = 500;
  // slideWidthPercentage = 60;
  slideWidth = 632; //pixel
  slideGap = 20; //pixel

  constructor(private renderer: Renderer2, private comp: ElementRef) {}

  ngOnInit(): void {
    this.updateSliderTransform(false);
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  // get sliderTransform() {
  //   const offset = (100 - this.slideWidthPercentage) / 2;
  //   return `translateX(calc(-${this.displayIndex * this.slideWidthPercentage}% - ${this.displayIndex * this.slideGap}px + ${offset}% + ${this.slideGap}px))`;
  // }

  get sliderTransform() {
    // const offset = (100% - this.slideWidth) / 2;
    const offset = (100% - 632) / 2;
    return `translateX(calc(-${this.displayIndex * this.slideWidth}px - ${this.displayIndex * this.slideGap}px + ${offset}% + ${this.slideGap}px))`;
  }

  updateSliderTransform(enableTransition: boolean) {
    const sliderEl = this.comp.nativeElement.querySelector('.slider');
    const transitionStyle = enableTransition ? `transform ${this.transitionDuration}ms ease-in-out` : 'none';
    this.renderer.setStyle(sliderEl, 'transition', transitionStyle);
  }

  changeSlide(direction: number) {
    if (this.transitioning) return;
    this.transitioning = true;
    this.displayIndex += direction;
    this.updateSliderTransform(true);
    this.currentSlide = (this.currentSlide + direction + this.slides.length) % this.slides.length;

    setTimeout(() => {
      if (this.displayIndex === 0) { 
        this.displayIndex = this.slides.length;
        this.updateSliderTransform(false);
      } else if (this.displayIndex === this.slides.length + 1) {
        this.displayIndex = 1;
        this.updateSliderTransform(false);
      }
      this.transitioning = false;
    }, this.transitionDuration);
  }

  goToSlide(slideIndex: number) {
    if (this.transitioning || this.currentSlide === slideIndex) return;
    this.currentSlide = slideIndex;
    this.displayIndex = slideIndex + 1;
    this.updateSliderTransform(true);
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.autoPlayInterval = setInterval(() => {
      this.changeSlide(1);
    }, 4000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.stopAutoPlay();
    if (event.key === 'ArrowLeft') {
      this.changeSlide(-1);
    } else if (event.key === 'ArrowRight') {
      this.changeSlide(1);
    }
    this.startAutoPlay();
  }

}
