import { Component, Input, signal } from '@angular/core';
import { Product } from '../../../core/interfaces/products';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-sliderproduct',
  imports: [CarouselModule],
  templateUrl: './sliderproduct.component.html',
  styleUrl: './sliderproduct.component.scss'
})
export class SliderproductComponent {
  
@Input() productdata=signal<Product[]>([])

customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

}
