


import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FlowbiteService } from '../services/platform/platform.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const flowbiteService = inject(FlowbiteService);

  if (flowbiteService.isPlatformBrowser()) {
    let token = localStorage.getItem('usertoken');

    if (token) {
      return true; 
    }
    else{

 
      return router.createUrlTree(['/login']); 


    }

  }

  return router.createUrlTree(['/login']);
};
