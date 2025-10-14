import { Component, AfterViewInit } from '@angular/core';
import { NgxSplideModule } from 'ngx-splide';
import Splide from '@splidejs/splide';
import { slides } from './carousel-content';

@Component({
  selector: 'app-splide-carousel',
  standalone: true, // It's good practice to make components standalone
  imports: [NgxSplideModule],
  templateUrl: './splide-carousel.html',
  styleUrl: './splide-carousel.scss'
})
export class SplideCarousel implements AfterViewInit {

    slides = slides;
    private splide: Splide | undefined;

    ngAfterViewInit(): void {
        // Initialize the Splide carousel
        this.splide = new Splide('#testimonial-slider', {
            type       : 'loop',     // Creates an infinite loop
            fixedWidth : '632px',
            // perPage    : 3,          // Shows 3 slides on desktop
            focus      : 'center',   // Ensures each slide is a focus point, creating a dot for each.
            perMove    : 1,          // Moves 1 slide at a time
            gap        : '1.5rem',   // Space between slides
            pagination : true,       // Enables pagination dots
            arrows     : true,       // Enables next/prev arrows
            // Responsive breakpoints
            // breakpoints: {
            //     1024: {
            //         perPage: 2, // 2 slides on tablets
            //     },
            //     768: {
            //         perPage: 1, // 1 slide on mobile screens
            //         arrows: false, // Hides arrows on mobile
            //     },
            // },
        }).mount();

        // // --- Code to rearrange controls ---
        // // After Splide is mounted, move the controls to a new wrapper
        // const controlsWrapper = document.createElement('div');
        // controlsWrapper.className = 'splide__controls slider-controls';

        // const prevArrow = this.splide.root.querySelector('.splide__arrow--prev');
        // const nextArrow = this.splide.root.querySelector('.splide__arrow--next');
        // const pagination = this.splide.root.querySelector('.splide__pagination');

        // // Remove the original arrows container if it exists
        // if (prevArrow && prevArrow.parentElement) {
        //     prevArrow.parentElement.remove();
        // }

        // // Add controls to the new wrapper in the desired order
        // if (prevArrow) controlsWrapper.appendChild(prevArrow);
        // if (pagination) controlsWrapper.appendChild(pagination);
        // if (nextArrow) controlsWrapper.appendChild(nextArrow);

        // // Add the new wrapper to the splide root element
        // if (controlsWrapper.children.length > 0 && this.splide.root) {
        //     this.splide.root.appendChild(controlsWrapper);
        // }
        // // --- End of rearrange code ---
    }

}
