import { ProductserviceService } from './../../services/productservice.service';
import { Component, effect, inject, Input, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../../core/interfaces/products';


@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
oneProduct=signal<Product>({} as Product)
private activatedRoute:ActivatedRoute=inject(ActivatedRoute)
private productserviceService:ProductserviceService=inject(ProductserviceService)
pid=signal<string|null>("")


constructor(){

  effect(()=>{

    this.getDetails()
  })
}


ngOnInit(){

  this.activatedRoute.paramMap.subscribe((p)=>{

   this.pid.set(p.get('id'))
  })
}


getDetails(){

this.productserviceService.getDetailsProduct(this.pid()).subscribe({

next:(res)=>{

  this.oneProduct.set(res.data)
  console.log(res);
  
},
error:(err)=>{
  console.log(err);
  
},

})
}

}
