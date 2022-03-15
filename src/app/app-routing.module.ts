import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoleComponent } from './admin/add-role/add-role.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin/admin.component';
import { DelRoleComponent } from './admin/del-role/del-role.component';
import { DelUserComponent } from './admin/del-user/del-user.component';
import { EditRoleComponent } from './admin/edit-role/edit-role.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { LoginComponent } from './login/login.component';  
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path: "signUp", component:SignUpComponent},
  {path: "", component:LoginComponent},


  {path: "admin", component: AdminComponent, children:[

    {path:"admin-dashboard", component:AdminDashboardComponent},


    //role
    {path:"addRole", component:AddRoleComponent},
    {path:"listRole", component:ListRoleComponent},
    {path:"delRole", component:DelRoleComponent},
    {path:"editRole/:roleId", component:EditRoleComponent},
   

    //user
    {path:"addUser", component:AddUserComponent},
    {path:"listUser", component:ListUserComponent},
    {path:"delUser", component:DelUserComponent},
    {path:"editUser/:userId", component:EditUserComponent }

  ]},
  


  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
