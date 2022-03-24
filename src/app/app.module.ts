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
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { EditRoleComponent } from './admin/edit-role/edit-role.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { ListCategoriesComponent } from './admin/category/list-categories/list-categories.component';
import { AddCategoryComponent } from './admin/category/add-category/add-category.component';
import { LogoutComponent } from './logout/logout.component';
import { EditCategoryComponent } from './admin/category/edit-category/edit-category.component';
import { AddSubcategoryComponent } from './admin/subcategory/add-subcategory/add-subcategory.component';
import { ListSubcategoryComponent } from './admin/subcategory/list-subcategory/list-subcategory.component';
import { EditSubcategoryComponent } from './admin/subcategory/edit-subcategory/edit-subcategory.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NgChartsModule } from 'ng2-charts';
import { ListAddressComponent } from './admin/address/list-address/list-address.component';
import { AddAddressComponent } from './admin/address/add-address/add-address.component';
import { EditAddressComponent } from './admin/address/edit-address/edit-address.component';
import { ListReviewComponent } from './admin/review/list-review/list-review.component';
import { EditReviewComponent } from './admin/review/edit-review/edit-review.component';
import { ListVendorComponent } from './admin/vendor/list-vendor/list-vendor.component';
import { AddVendorComponent } from './admin/vendor/add-vendor/add-vendor.component';
import { EditVendorComponent } from './admin/vendor/edit-vendor/edit-vendor.component';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    AddRoleComponent,
    ListRoleComponent,
    AdminHeaderComponent,
    EditRoleComponent,
    AdminDashboardComponent,
    AddUserComponent,
    AdminComponent,
    AdminSidebarComponent,
    AdminFooterComponent,
    ListUserComponent,
    EditUserComponent,
    ListCategoriesComponent,
    AddCategoryComponent,
    LogoutComponent,
    EditCategoryComponent,
    AddSubcategoryComponent,
    ListSubcategoryComponent,
    EditSubcategoryComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    ListAddressComponent,
    AddAddressComponent,
    EditAddressComponent,
    ListReviewComponent,
    EditReviewComponent,
    ListVendorComponent,
    AddVendorComponent,
    EditVendorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
