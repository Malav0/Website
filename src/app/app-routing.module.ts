import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { CenterComponent } from './center/center.component';

const routes: Routes = [
  {
    path: "", pathMatch: "full", redirectTo: "login"
      
    
 },
 {
  path:'header',component:HeaderComponent
 },
 {
  path:'center',component:CenterComponent
 },
 {
   path:'login', component:LoginComponent
 },
 {
   path:'signup', component:SignupComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
