import { Component, AfterViewInit } from '@angular/core';
import { NgxSplideModule } from 'ngx-splide';
import { Splide } from '@splidejs/splide';
import { testimonialsContent as slides } from '../../testimonials/testimonials-content';

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
        this.splide = new Splide('#testimonial-slider', {
            type       : 'loop',
            autoWidth  : true,
            focus      : 'center',   // Ensures each slide is a focus point, creating a dot for each.
            perMove    : 1,
            pagination : true,
            arrows     : true,
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
    }

}
