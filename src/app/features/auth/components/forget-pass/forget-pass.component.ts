import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject, Input, signal } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forget-pass',
  imports: [ReactiveFormsModule,],
  templateUrl: './forget-pass.component.html',
  styleUrl: './forget-pass.component.scss'
})
export class ForgetPassComponent {



private authService:AuthService=inject(AuthService)
private router:Router=inject(Router)
private toastrService:ToastrService=inject(ToastrService)

massForgetpass=signal<string>("")
forgetpassGroup:FormGroup=new FormGroup(

{email:new FormControl(null,[Validators.required,Validators.email])}

)

forgetpass(bodydata:string){

this.authService.forgetPass(bodydata).subscribe((res)=>{

  console.log(res);
 this.massForgetpass.set(res)
  this.toastrService.success("okay pass")

if( res.statusMsg=="success"){

this.router.navigate(['/verify'])
}

})

}



}
