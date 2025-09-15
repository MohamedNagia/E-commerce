import { Component, Input, signal } from '@angular/core';
import { Product } from '../../../core/interfaces/products';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-sliders-product',
  imports: [CarouselModule],
  templateUrl: './sliders-product.component.html',
  styleUrl: './sliders-product.component.scss'
})
export class SlidersProductComponent {
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
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
}
