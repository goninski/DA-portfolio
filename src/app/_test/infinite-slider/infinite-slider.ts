import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-infinite-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infinite-slider.html',
  styleUrl: './infinite-slider.scss'
})

export class InfiniteSlider {
  slides = [
    { img: 'https://picsum.photos/600/400?random=1' },
    { img: 'https://picsum.photos/600/400?random=2' },
    { img: 'https://picsum.photos/600/400?random=3' },
    { img: 'https://picsum.photos/600/400?random=4' },
    { img: 'https://picsum.photos/600/400?random=5' },
  ];

  // The logical current slide index (0 to slides.length - 1) for UI like radio buttons
  currentSlide = 0;
  // The actual index for transformation, including clones. Starts at 1 for the first real slide.
  displayIndex = 1;
  autoPlayInterval: any;
  transitioning = false;
  transitionDuration = 500; // ms, should match the CSS transition duration

  // Constants for slider geometry
  slideWidthPercentage = 60;
  slideGap = 20; // in pixels

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    // Set initial position without transition
    this.updateSliderTransform(false);
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  get sliderTransform() {
    const offset = (100 - this.slideWidthPercentage) / 2;
    return `translateX(calc(-${this.displayIndex * this.slideWidthPercentage}% - ${this.displayIndex * this.slideGap}px + ${offset}% + ${this.slideGap}px))`;
  }

  updateSliderTransform(enableTransition: boolean) {
    const sliderEl = this.el.nativeElement.querySelector('.slider');
    const transitionStyle = enableTransition ? `transform ${this.transitionDuration}ms ease-in-out` : 'none';
    this.renderer.setStyle(sliderEl, 'transition', transitionStyle);
  }

  changeSlide(direction: number) {
    if (this.transitioning) return;
    this.transitioning = true;

    this.displayIndex += direction;
    this.updateSliderTransform(true);

    // Update logical slide index for radio buttons
    this.currentSlide = (this.currentSlide + direction + this.slides.length) % this.slides.length;

    setTimeout(() => {
      if (this.displayIndex === 0) { // Jump from cloned last to real last
        this.displayIndex = this.slides.length;
        this.updateSliderTransform(false);
      } else if (this.displayIndex === this.slides.length + 1) { // Jump from cloned first to real first
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
    this.stopAutoPlay(); // Ensure no multiple intervals are running
    this.autoPlayInterval = setInterval(() => {
      this.changeSlide(1);
    }, 4000); // Change slide every 4 seconds
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
