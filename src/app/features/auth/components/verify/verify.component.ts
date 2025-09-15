import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-verify',
  imports: [ReactiveFormsModule],
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.scss'
})
export class VerifyComponent {

private authService:AuthService=inject(AuthService)
private toastrService:ToastrService=inject(ToastrService)

// resetCode:string=''



// verifytpass(verifycode:any){


// this.authService.forgetPass(verifycode).subscribe((res)=>{

//   console.log(res);

//   this.resetCode=res
//   this.toastrService.success("okay pass")
// })

// }

verifyForm:FormGroup=new FormGroup({

resetCode:new FormControl(null,[Validators.required])

})


  verifypass() {
    console.log('clicked verify');

    if (this.verifyForm.invalid) {
      this.toastrService.error('أدخل الكود');
      return;
    }

    // جسم الطلب بالظبط زي ما الـ API عايز
    const body = { resetCode: this.verifyForm.value.resetCode };
    console.log('body being sent', body);

    this.authService.verivyPass(body).subscribe({
      next: res => {
        console.log(res);
        this.toastrService.success('تم التحقق بنجاح');
        // هنا ممكن توديه على صفحة تغيير الباسورد الجديدة
      },
      error: err => {
        console.error(err);
        this.toastrService.error('الكود غير صحيح');
      }
    });
  }
  }