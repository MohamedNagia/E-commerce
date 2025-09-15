
import { ProductserviceService } from './../../services/productservice.service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductshareComponent } from "../../../../shared/components/productshare/productshare.component";
import { SliderproductComponent } from "../../../../shared/components/sliderproduct/sliderproduct.component";
import { SlidersProductComponent } from "../../../../shared/components/sliders-product/sliders-product.component";
import { Product } from '../../../../core/interfaces/products';
import { ProductsComponent } from "../../../products/components/products/products.component";

@Component({
  selector: 'app-home',
  imports: [ProductshareComponent, SliderproductComponent, SlidersProductComponent, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

private productserviceService:ProductserviceService=inject(ProductserviceService)
getdata=signal<Product[]>([])
ngOnInit(){

  this.getProducts()
}
getProducts(){

  this.productserviceService.productAPI().subscribe({
next:(res)=>{

this.getdata.set(res.data)
  console.log(res.data);
  
  
},
error:(err)=>{
  console.log(err);
  
}

  })
}



}
