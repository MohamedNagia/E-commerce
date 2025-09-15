import { CartService } from './../../../features/cart/services/cart.service';
import { Component, inject, Input, signal } from '@angular/core';
import { Product } from '../../../core/interfaces/products';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {  ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-productshare',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl:'./productshare.component.html',
  styleUrl: './productshare.component.scss'
})
export class ProductshareComponent {
private cartService:CartService=inject(CartService)
private toastrService:ToastrService=inject(ToastrService)
@Input() productdata=signal<Product[]>([])

addCard(idCart:string){

console.log(this.cartService,idCart);

this.cartService.addProductDoCart(idCart).subscribe({
next:(res)=>{
  console.log(res.message);

this.toastrService.success(res.message,"cart success")
},
error:(err)=>{
  console.log(err);
  this.toastrService.error(err.message,"card failed")
  
},

})



}





}
