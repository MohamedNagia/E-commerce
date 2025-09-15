import { ProductserviceService } from './../../../home/services/productservice.service';
import { Product } from './../../../../core/interfaces/products';
import { Component, inject, Input, Query, signal, } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

private productserviceService:ProductserviceService=inject(ProductserviceService)
  allProduct=signal<Product[]>([])
  SearchProduct=signal<Product[]>([])

  searchInput=signal<boolean>(false)

  search:FormControl=new FormControl

ngOnInit(){

  this.showProduct()


}

showProduct(){

this.productserviceService.productAPI().subscribe({

next:(res)=>{
console.log(res.data);

this.allProduct.set(res.data)



}


})


}
 
addCard(idCart:string){

this.productserviceService.getDetailsProduct(idCart).subscribe({

  next:(res)=>{

  console.log(res);


  }
})
}




}
