import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoleComponent } from './admin/add-role/add-role.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AddAddressComponent } from './admin/address/add-address/add-address.component';
import { EditAddressComponent } from './admin/address/edit-address/edit-address.component';
import { ListAddressComponent } from './admin/address/list-address/list-address.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AddCategoryComponent } from './admin/category/add-category/add-category.component';
import { EditCategoryComponent } from './admin/category/edit-category/edit-category.component';
import { ListCategoriesComponent } from './admin/category/list-categories/list-categories.component';
import { EditRoleComponent } from './admin/edit-role/edit-role.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { ListReviewComponent } from './admin/review/list-review/list-review.component';
import { AddSubcategoryComponent } from './admin/subcategory/add-subcategory/add-subcategory.component';
import { EditSubcategoryComponent } from './admin/subcategory/edit-subcategory/edit-subcategory.component';
import { ListSubcategoryComponent } from './admin/subcategory/list-subcategory/list-subcategory.component';
import { AddVendorComponent } from './admin/vendor/add-vendor/add-vendor.component';
import { ListVendorComponent } from './admin/vendor/list-vendor/list-vendor.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { AuthGuard } from './auth/auth.guard';
import { EditVendorComponent } from './admin/vendor/edit-vendor/edit-vendor.component';
import { AddVendorAddressComponent } from './admin/address/add-vendor-address/add-vendor-address.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: '', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'changePassword', component: ChangePasswordComponent },

  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'admin-dashboard', component: AdminDashboardComponent },

      //role
      { path: 'addRole', component: AddRoleComponent },
      { path: 'listRole', component: ListRoleComponent },
      { path: 'editRole/:roleId', component: EditRoleComponent },

      //user
      { path: 'addUser', component: AddUserComponent },
      { path: 'listUser', component: ListUserComponent },
      { path: 'editUser/:userId', component: EditUserComponent },

      //category
      { path: 'listCategory', component: ListCategoriesComponent },
      { path: 'addCategory', component: AddCategoryComponent },
      { path: 'editCategory/:categoryId', component: EditCategoryComponent },

      //subcategory
      { path: 'listSubCategory', component: ListSubcategoryComponent },
      { path: 'addSubCategory', component: AddSubcategoryComponent },
      {
        path: 'editSubCategory/:subCatId',
        component: EditSubcategoryComponent,
      },

      //review
      { path: 'listReview', component: ListReviewComponent },

      //address
      { path: 'listAddress', component: ListAddressComponent },
      { path: 'addAddress', component: AddAddressComponent },
      { path: 'editAddress/:addressId', component: EditAddressComponent },

      //vendorDetails
      { path: 'listVendorDetails', component: ListVendorComponent },
      { path: 'addVendorDetails', component: AddVendorComponent },
      { path: 'editVendorDetails/:vendorId', component: EditVendorComponent },

      //vendorAddress
      { path: 'addVendorAddresses', component: AddVendorAddressComponent },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
