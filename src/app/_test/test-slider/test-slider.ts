import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-slider.html',
  styleUrl: './test-slider.scss'
})
// export class TestSlider implements OnInit, OnDestroy {
export class TestSlider {
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
