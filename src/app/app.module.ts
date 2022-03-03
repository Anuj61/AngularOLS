import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {  HttpClientModule} from '@angular/common/http';
import { AddRoleComponent } from './admin/add-role/add-role.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DelRoleComponent } from './admin/del-role/del-role.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    AddRoleComponent,
    AdminHeaderComponent,
    ListRoleComponent,
    DelRoleComponent,
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
