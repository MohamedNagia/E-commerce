import { FlowbiteService } from './../../../core/services/platform/platform.service';

import { environment } from './../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {  jwtDecode} from 'jwt-decode';




@Injectable({
  providedIn: 'root'
})
export class AuthService {



  private httpClient: HttpClient = inject(HttpClient);
  private flowbiteService: FlowbiteService = inject(FlowbiteService);

  userdata = new BehaviorSubject<any>(null);

  constructor() {
    // مش هينفع ngOnInit جوا service
    if (this.flowbiteService.isPlatformBrowser()) {
      this.setUserdata();
    }
  }

  registerAPI(bodydata: object): Observable<any> {
    return this.httpClient.post(`${environment.baseurl}auth/signup`, bodydata);
  }

  loginAPI(bodydata: object): Observable<any> {
    return this.httpClient.post(`${environment.baseurl}auth/signin`, bodydata);
  }

forgetPass(bodydata: string):Observable<any>{

return this.httpClient.post(`${environment.baseurl}auth/forgotPasswords`,bodydata)
}



  verivyPass(body: any): Observable<any> {
    return this.httpClient.post(`${environment.baseurl}auth/verifyResetCode`, body);
  }

  setUserdata() {
if(this.flowbiteService.isPlatformBrowser()){

    const token = localStorage.getItem('usertoken');
    if (token) {
      this.userdata.next(jwtDecode(token));
      console.log(this.userdata.getValue());
    }
  }
  }
  
}

