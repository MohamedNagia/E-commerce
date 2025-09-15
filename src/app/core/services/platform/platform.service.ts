
// src/app/services/flowbite.service.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FlowbiteService {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

    isPlatformBrowser(){
  if(isPlatformBrowser(this.platformId)){
    return true
  }
  return false
}
}