import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userId: string = ""
  firstName: string = ""
  email: string = ""
  contactNumber : string = ""

  constructor(private aRoute:ActivatedRoute ,private userService:UserService,private tsService:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.userId = this.aRoute.snapshot.params["userId"];
    this.getUserById(this.userId)
  }

  getUserById(userId: any){
    this.userService.getUserById(this.userId).subscribe(resp=>{
      this.firstName = resp.data.firstName;
      this.email = resp.data.email;
      this.contactNumber = resp.data.contactNumber
      // console.log(this.firstName + " " +this.email+ " "+ this.contactNumber + " " + this.userId);
    })
    
  }

  updateUser(){
    //  alert(this.roleId+" "+this.roleName)
      let user = {
        firstName: this.firstName,
        email: this.email,
        contactNumber: this.contactNumber,
        userId:this.userId
      }
      console.log(user)
      this.userService.updateUser(user).subscribe(resp=>{
        if(resp.status == 200){
          this.tsService.success("", resp.msg ,{timeOut:3000})
          this.router.navigateByUrl("/admin/listUser")
        }else{
          this.tsService.error("", resp.mgs , {timeOut:3000})
        }
      })
      
   }

}
