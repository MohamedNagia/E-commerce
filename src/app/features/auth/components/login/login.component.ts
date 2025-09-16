import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  
private authService:AuthService=inject(AuthService)
private router:Router=inject(Router)
loading=signal<boolean>(false)
errorMasseage=signal<string>("")

  loginForm: FormGroup = new FormGroup({
   
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[a-z][0-9]{6}$/)]),
},)

  loginSubmit() {
    if(this.loginForm.valid){
 this.loading.set(true)
 this.authService.loginAPI(this.loginForm.value).subscribe({
   
   next:(res)=>{




    if(res.message=="success"){
      this.loading.set(false)

      localStorage.setItem("usertoken",res.token)

this.authService.setUserdata()
console.log(this.authService.setUserdata());


      console.log(res);
       this.router.navigate(['/home'])}
},
error:(err)=>{
  this.loading.set(false)
this.errorMasseage.set(err.error.message)
  console.log(err);


},

})


  }
  }

forgetPass(){

this.router.navigate(['/forgetpass'])

}

}
