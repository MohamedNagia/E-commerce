import {  } from '@angular/platform-browser';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { FlowbiteService } from '../../services/platform/platform.service';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {

 let flowbiteService:FlowbiteService=inject(FlowbiteService)




if(flowbiteService.isPlatformBrowser()){

  if(localStorage.getItem("usertoken")){


    let headerData:any={token:localStorage.getItem("usertoken")}
    req=req.clone({
     setHeaders:headerData})
    }
  }

  return next(req);
};
