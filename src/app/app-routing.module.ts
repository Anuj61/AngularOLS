import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoleComponent } from './admin/add-role/add-role.component';
import { DelRoleComponent } from './admin/del-role/del-role.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { LoginComponent } from './login/login.component';  
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path: "signUp", component:SignUpComponent},
  {path: "", component:LoginComponent},
  {path:"addRole", component:AddRoleComponent},
  {path:"listRole", component:ListRoleComponent},
  {path:"delRole", component:DelRoleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
