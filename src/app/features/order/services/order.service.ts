import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
httpClient:HttpClient=inject(HttpClient)


cheackOut(orderId:string|null,addressValue:object):Observable<any>{

return this.httpClient.post(`${environment.baseurl}orders/checkout-session/${orderId}?url=`,
{
  
 shippingAddress:addressValue
}

)

}



}
