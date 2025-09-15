import { Component, inject, signal } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../intetrfaces/category';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
private categoriesService:CategoriesService=inject(CategoriesService)

resultCate=signal<Category[]>([])
ngOnInit(){

  this.displayCate()
}

displayCate(){

this.categoriesService.getAllCate().subscribe((res)=>{

  console.log(res);

  this.resultCate.set(res.data)
  
})

}







}
