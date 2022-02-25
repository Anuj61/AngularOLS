import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoleComponent } from './admin/add-role/add-role.component';
import { LoginComponent } from './login/login.component';  
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path: "signUp", component:SignUpComponent},
  {path: "", component:LoginComponent},
  {path:"addRole", component:AddRoleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
