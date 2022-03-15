import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/app/session.service';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  constructor(
    private roleService: RoleService,
    private toastr: ToastrService,
    private sessionService: SessionService,
    private route: Router
  ) {}

  firstName: string = '';
  email: string = '';
  gender: string = '';
  password: string = '';
  contactNumber: string = '';
  role: string = '';

  roles: Array<any> = [];

  ngOnInit(): void {
    this.getAllRoles();
  }

  //listing role options for html selection
  getAllRoles() {
    this.roleService.listRole().subscribe((resp) => {
      //not able to have access to role data --- should be on controller logic
      this.roles = resp.data;
      this.roles = this.roles.slice(1);
    });
  }


  //adding user to db
  addUser() {
    let user = {
      firstName: this.firstName,
      email: this.email,
      gender: this.gender,
      password: this.password,
      contactNumber: this.contactNumber,
      role: this.role,
    };
    console.log(this.role)
    // console.log(user);
    
    this.sessionService.saveUser(user).subscribe(resp=>{
      if(resp.status==200){
        this.route.navigateByUrl("/admin/listUser")
        this.toastr.success("", resp.msg, {timeOut:3000})
      }else{
        this.toastr.error("", resp.data, {timeOut:3000})
      }
    })
  }
}
