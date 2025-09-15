import { AuthService } from './../../../auth/services/auth.service';
import { FlowbiteService } from './../../../../core/services/platform/platform.service';
import { Brand } from '../../intetrfaces/brands';
import { BrandsService } from './../../services/brands.service';
import { Component, inject, signal } from '@angular/core';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {

  private brandsService:BrandsService=inject(BrandsService)
  private flowbiteService:FlowbiteService=inject(FlowbiteService)
  private authService:AuthService=inject(AuthService)
resBrands=signal<Brand[]>([])
idBrand=signal<string>("")

  ngOnInit(){

    this.displayBrands()
  }

  displayBrands(){
this.brandsService.getPrands().subscribe((res)=>{
  console.log(res);
  

  this.resBrands.set(res.data)
})

  }

  ngAfterViewInit(){
    
      if(this.flowbiteService.isPlatformBrowser()){
  
    this.authService.setUserdata();
    initFlowbite();
    
  }
  
  }


displaySpacBrands(idbrand:string){

this.brandsService.getSpacPrands(idbrand).subscribe((res)=>{

  console.log(res);
  this.idBrand.set(res.data.name)


})

}


}
