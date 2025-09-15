import { OrderService } from './../../services/order.service';

import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  imports: [ReactiveFormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
orderService:OrderService=inject(OrderService)
activatedRoute:ActivatedRoute=inject(ActivatedRoute)
orderId=signal<string|null>('')
ngOnInit(){

this.activatedRoute.paramMap.subscribe((p)=>{

this.orderId.set(p.get("orderId"))

})
}
loading=signal<boolean>(false)
orderForm:FormGroup=new FormGroup({

  details:new FormControl(null),
  phone:new FormControl(null),
  city:new FormControl(null),
})

checkOrder(){

  this.loading.set(true)
this.orderService.cheackOut(this.orderId(),this.orderForm.value).subscribe({

  next:(res)=>{
this.loading.set(false)
    console.log(res);
    window.location.href=res.session.url
    
  }
})



}
}
