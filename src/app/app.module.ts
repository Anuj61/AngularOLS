import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {  HttpClientModule} from '@angular/common/http';
import { AddRoleComponent } from './admin/add-role/add-role.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DelRoleComponent } from './admin/del-role/del-role.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { EditRoleComponent } from './admin/edit-role/edit-role.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { DelUserComponent } from './admin/del-user/del-user.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    AddRoleComponent,
    ListRoleComponent,
    DelRoleComponent,
    AdminHeaderComponent,
    EditRoleComponent,
    AdminDashboardComponent,
    AddUserComponent,
    AdminComponent,
    AdminSidebarComponent,
    AdminFooterComponent,
    ListUserComponent,
    DelUserComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
