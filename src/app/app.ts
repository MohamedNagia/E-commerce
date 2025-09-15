import { FlowbiteService } from './core/services/platform/platform.service';
import { isPlatformBrowser } from '@angular/common';

import { initFlowbite } from 'flowbite';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/layout/navbar/navbar.component";
import { FooterComponent } from "./core/layout/footer/footer.component";
import { AuthService } from './features/auth/services/auth.service';
import {TranslatePipe, TranslateDirective,TranslateService} from '@ngx-translate/core';

import { NgxSpinnerModule } from "ngx-spinner";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent,NgxSpinnerModule,TranslatePipe,
    TranslateDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App { 
  private authService = inject(AuthService);
private flowbiteService:FlowbiteService=inject(FlowbiteService)



ngAfterViewInit(){
  
    if(this.flowbiteService.isPlatformBrowser()){

  this.authService.setUserdata();
  initFlowbite();
  
}

}




}


