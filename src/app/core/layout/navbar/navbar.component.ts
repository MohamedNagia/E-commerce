import { AuthService } from './../../../features/auth/services/auth.service';

import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FlowbiteService } from '../../services/platform/platform.service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive,TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
private authService:AuthService=inject(AuthService)
private router:Router=inject(Router)

login=signal<boolean>(false)

private flowbiteService:FlowbiteService=inject(FlowbiteService)
 private translate = inject(TranslateService);
   ngOnInit(): void {
if(    this.flowbiteService.isPlatformBrowser()){
  this.authService.setUserdata()

this.authService.userdata.subscribe({

   next: (res) => {
        console.log('userdata', res);

        if (res == null) {
          this.login.set(false);
        } else {
          this.login.set(true);
        }
      },
      error: (err) => console.log(err),
    });
}


}

logout(){  
  localStorage.removeItem("usertoken")
  this.router.navigate(['/login'])
  this.authService.userdata.next(null)
}
  useLanguage(language: string): void {
    this.translate.use(language);
if(language=="en"){
document.body.dir="ltr"

}else if(language=="ar" ){

document.body.dir="rtl"
}

  }
}