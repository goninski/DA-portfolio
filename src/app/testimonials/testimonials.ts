import { Component, AfterViewInit, OnInit } from '@angular/core';
import { NgxSplideModule } from 'ngx-splide';
import { Splide } from '@splidejs/splide';
import { testimonialsContent as slides } from './testimonials-content';

@Component({
  selector: 'app-testimonials',
  imports: [NgxSplideModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class Testimonials implements AfterViewInit {
// export class Testimonials implements OnInit {

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
