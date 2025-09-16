import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';

import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
private authService:AuthService=inject(AuthService) 
private toastrService:ToastrService=inject(ToastrService) 
private router:Router=inject(Router)
loading=signal<boolean>(false)
errorMasseage=signal<string>("")

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(18)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[a-z][0-9]{6}$/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^[a-z][0-9]{6}$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^(01)[0125][0-9]{8}$/)]),

  },this.repasswordValid)

  registerSubmit() {

    console.log(this.registerForm.value);
    
    if(this.registerForm.valid){
      this.loading.set(true)
this.authService.registerAPI(this.registerForm.value).subscribe({
next:(res)=>{
  console.log(res);
  if(res.message=="success"){
    console.log(res);
  this.loading.set(false)
this.router.navigate(['/login'])
this.toastrService.success("success")

}

},
error:(err)=>{
  this.loading.set(false)
  this.errorMasseage.set(err.error.message)
  console.log(this.errorMasseage);
  console.log(err);


},

})


  }
  }

  repasswordValid(pass:AbstractControl){

if(pass.get("password")?.value===pass.get("rePassword")?.value){

  return null
}else{

  return {notmatch:true}
}

  }
}
