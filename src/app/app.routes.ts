import { Routes } from '@angular/router';
import { RegisterComponent } from './features/auth/components/register/register.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { CartComponent } from './features/cart/components/cart/cart.component';
import { ProductsComponent } from './features/products/components/products/products.component';
import { BrandsComponent } from './features/brands/components/brands/brands.component';
import { CategoriesComponent } from './features/categories/components/categories/categories.component';
import { NotfoundComponent } from './core/layout/notfound/notfound/notfound.component';
import { authGuard } from './core/guards/auth.guard';
import { ProductDetailsComponent } from './features/home/pages/product-details/product-details.component';
import { OrderComponent } from './features/order/components/order/order.component';
import { AllorderComponent } from './features/order/components/allorder/allorder/allorder.component';
import { ForgetPassComponent } from './features/auth/components/forget-pass/forget-pass.component';
import { VerifyComponent } from './features/auth/components/verify/verify.component';

export const routes: Routes = [

{path:"",redirectTo:"register",pathMatch:"full"},
{path:"register",component:RegisterComponent,title:"Register",},
{path:"forgetpass",component:ForgetPassComponent,title:"Forgetpass",},
{path:"verify",component:VerifyComponent,title:"Verify",},
{path:"login",component:LoginComponent,title:"Login",},
{path:"home",component:HomeComponent,title:"Home",canActivate:[authGuard]},
{path:"cart",component:CartComponent,title:"Cart",canActivate:[authGuard]},
{path:"products",component:ProductsComponent,title:"Products",canActivate:[authGuard]},
{path:"allorders",component:AllorderComponent,title:"Products",canActivate:[authGuard]},
{path:"brands",component:BrandsComponent,title:"Brands",canActivate:[authGuard]},
{path:"productDetails/:id",component:ProductDetailsComponent,title:"productDetails",canActivate:[authGuard]},
{path:"order/:orderId",component:OrderComponent,title:"productDetails",canActivate:[authGuard]},
{path:"categories",component:CategoriesComponent,title:"categories",canActivate:[authGuard]},
{path:"**",component:NotfoundComponent,title:"not found"},

];
