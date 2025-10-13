import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-slider-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-slider-2.html',
  styleUrl: './test-slider-2.scss'
})

export class TestSlider2 {
  slides = [
    { img: 'https://picsum.photos/600/400?random=1' },
    { img: 'https://picsum.photos/600/400?random=2' },
    { img: 'https://picsum.photos/600/400?random=3' },
    { img: 'https://picsum.photos/600/400?random=4' },
    { img: 'https://picsum.photos/600/400?random=5' },
  ];

  currentSlide = 0;
  autoPlayInterval: any;

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  get sliderTransform() {
    // This calculation centers the active slide (60% width) and accounts for the gap (20px).
    // 20% is the offset to center the slide initially: (100% container - 60% slide) / 2.
    const slideWidthPercentage = 60;
    return `translateX(calc(-${this.currentSlide * slideWidthPercentage}% - ${this.currentSlide * 20}px + 20%))`;
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
