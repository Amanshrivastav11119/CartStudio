import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testinomial',
  standalone: false,
  templateUrl: './testinomial.html',
  styleUrl: './testinomial.css'
})
export class Testinomial {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
    animateOut: 'fadeOut',   // animation
    animateIn: 'fadeIn',
    items: 1
  };
}
