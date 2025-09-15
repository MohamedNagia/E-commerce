
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { env } from 'process';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  
private  httpClient:HttpClient=inject(HttpClient) 
private  usertoken:any={token:localStorage.getItem("usertoken")}


addProductDoCart(idcart:string|null):Observable<any>{

  return this.httpClient.post(`${environment.baseurl}cart`,
    {
    "productId": idcart
 },

)
}

updateCart(idcart:string|null,countCart:number):Observable<any>{

return this.httpClient.put(`${environment.baseurl}cart/${idcart}`,
{
    "count": countCart
},

)

}

getLogiinCart():Observable<any>{

  return this.httpClient.get(`${environment.baseurl}cart`,


  
  )
}

removeSpecCart(idcart:string|null):Observable<any>{

  return this.httpClient.delete(`${environment.baseurl}cart/${idcart}`,
  
  )
}

clearAllCart():Observable<any>{

 return  this.httpClient.delete(`${environment.baseurl}cart`,

 )
}




}
