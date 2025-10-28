import { Component, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';

import { Splide } from '@splidejs/splide';

import { TranslatePipe } from '../_pipes/translate.pipe';
import { data, dataTestimonials as slides } from './testimonials.data';

@Component({
  selector: 'app-testimonials',
  imports: [TranslatePipe],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class Testimonials implements AfterViewInit, OnDestroy {
    data = data;
    slides = slides;
    private splide: Splide | undefined;

    constructor(private el: ElementRef) {}

    ngAfterViewInit(): void {
        const splide = new Splide('.splide', {
            pagination : true,
            arrows     : true,
            autoHeight : true,
            autoWidth  : true,
            gap        : '64px',
            type       : 'loop',
            focus      : 'center',
            perMove    : 1,
            speed      : 1000,
            easing     : 'cubic-bezier(0,0,0.58,1)',
            updateOnMove: true,
            autoplay   : true,
            pauseOnHover: true,
            interval   : 4500,

            arrowPath  : 'M22.7715 16.6667H7.33317C7.14339 16.6667 6.98484 16.603 6.8575 16.4757C6.73017 16.3484 6.6665 16.1898 6.6665 16C6.6665 15.8102 6.73017 15.6517 6.8575 15.5244C6.98484 15.397 7.14339 15.3334 7.33317 15.3334H22.7715L15.5205 8.08202C15.3905 7.95225 15.3225 7.79925 15.3165 7.62302C15.3105 7.44702 15.3811 7.28547 15.5282 7.13836C15.6751 6.99658 15.8323 6.92436 15.9998 6.92169C16.1674 6.91925 16.3246 6.99147 16.4715 7.13836L24.5792 15.246C24.6956 15.3625 24.7773 15.4814 24.8242 15.6027C24.8713 15.724 24.8948 15.8565 24.8948 16C24.8948 16.1436 24.8713 16.276 24.8242 16.3974C24.7773 16.5187 24.6956 16.6376 24.5792 16.754L16.4715 24.8617C16.3468 24.9864 16.1952 25.053 16.0165 25.0617C15.8378 25.0701 15.6751 25.0035 15.5282 24.8617C15.3811 24.7146 15.3075 24.556 15.3075 24.386C15.3075 24.2158 15.3811 24.0572 15.5282 23.9104L22.7715 16.6667Z',

            breakpoints: {
                1439: {
                    gap: '4vw'
                },
                719: {
                    gap: '2vw'
                },
            }
        });

        const splideRoot = splide.root;

        splide.on('resized', () => {
            if (splideRoot) {
              // Reset height to let slides determine it naturally
              splideRoot.style.minHeight = '';
      
              const slides = this.el.nativeElement.querySelectorAll('.splide__slide');
              let maxHeight = 0;
              slides.forEach((slide: HTMLElement) => {
                if (slide.offsetHeight > maxHeight) {
                  maxHeight = slide.offsetHeight;
                }
              });
              
              // Set the track height to the height of the tallest slide
              if (maxHeight > 0) {
                splideRoot.style.minHeight = `${maxHeight + 130}px`;
              }
            }
          });

        this.splide = splide.mount();

    }


    ngOnDestroy(): void {
        this.splide?.destroy();
    }
}
