import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { CartService } from './../../services/cart.service';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private router: Router = inject(Router)
  private cartService: CartService = inject(CartService)
  private toastrService: ToastrService = inject(ToastrService)
  allCartProducts = signal<any>([])
  totalPrice = signal<any>([])
  orderId=signal<any>("")

  ngOnInit() {

    this.displayCart()
  }

  displayCart() {
    this.cartService.getLogiinCart().subscribe({

      next: (res) => {

        this.allCartProducts.set(res.data.products)
        this.totalPrice.set(res.data.totalCartPrice)
        console.log(res.data.products);
this.orderId.set(res.cartId)
      },
      error: (err) => {
        console.log(err);

      },
    })
  }


  removeCart(idcart: string) {

    this.cartService.removeSpecCart(idcart).subscribe({
      next: (res) => {
        this.displayCart()
        console.log(res);
        this.toastrService.success("remove card successfuly", "Card Operation")

      },
      error: (err) => {
        console.log(err);
        this.toastrService.error("remove card error", "Card Operation")

      },

    })

  }


  updataCountCart(idcart: string, countCart: number) {

    if (countCart <= 0) {
      this.removeCart(idcart)
    }
    else {


      this.cartService.updateCart(idcart, countCart).subscribe({
        next: (res) => {
          console.log(res);
          this.toastrService.success("cart item update successfully", "cart operation!")
          this.displayCart()

        },
        error: (err) => {
          console.log(err);
          this.toastrService.success("Error updating cart ❌", "cart operation!")

        },


      })
    }

  }


  clearAll() {

    let userClear = confirm("Are You Sure")
    if (userClear) {
      this.cartService.clearAllCart().subscribe({

        next: (res) => {
          console.log(res);
          this.toastrService.success("clear all product successfully", "cart operation")
          this.displayCart()
          this.router.navigate(["/home"])

        },
        error: (err) => {
          this.toastrService.error("clear all product successfully", "cart operation")
          console.log(err);

        },


      })
    }

  }

requestOrder(){



this.router.navigate(["/order",this.orderId()])
}

}
