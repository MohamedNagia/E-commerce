import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  
private httpClient:HttpClient=inject(HttpClient)

productAPI():Observable<any>{

return this.httpClient.get(`${environment.baseurl}products`)
}
getDetailsProduct(pid:string|null):Observable<any>{

return this.httpClient.get(`${environment.baseurl}products/${pid}`)

}

searchInput(price:string):Observable<any>{

return this.httpClient.get(`${environment.baseurl}products?price[gte]=${price}`)

}


}
