import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  firstName: string  = ""
  email: string = ""
  password: string = ""
  roleName : string = ""
  role : string = ""
  confirmPassword: string = ""
  contactNumber: string = ""


  firstNameError: string = ""
  emailError: string = ""
  passwordError: string =  ""
  confirmPasswordError: string = ""

  constructor(private sessionService:SessionService,private toastr:ToastrService, private route:Router) { }

  ngOnInit(): void {
  }

  saveuser(){
    let isError = false
    if(this.email == "" || this.email.trim().length == 0){
      this.emailError= "Please Enter email"
      isError = true
    }else{
      this.emailError = ""
    }

    if(this.password == "" || this.password.trim().length == 0){
      this.passwordError = "Please Enter password"
      isError = true
    }else{
      this.passwordError = ""
    }

    if(this.firstName == "" || this.firstName.trim().length == 0){
      this.firstNameError = " Please Enter Email"
      isError = true
    }else{
      this.emailError = ""
    }

    if(this.password != this.confirmPassword){
      this.confirmPasswordError= "Password and Confirm Password are not same"
      isError = true
    }

    if(isError){

    }else{

    //checking if user or serviceProvider
    if(this.roleName === "vendor"){
      this.role = "621360a9529f58ee8d5c3f66"
    }else{
      this.role = "6213608a529f58ee8d5c3f64"//user
    }


    //checking password and confirm password
    
    let user = {"firstName":this.firstName, "email":this.email, "password":this.password, "role":this.role, "contactNumber":this.contactNumber}
    // console.log(user)
    this.sessionService.saveUser(user).subscribe(resp=>{ ///subscribing to the event of service
      // console.log(resp);
      if(resp.status == 200){
        this.toastr.success("", resp.msg, {timeOut:3000})
        this.route.navigateByUrl("/login")
      }else{
        this.toastr.error("", resp.msg, {timeOut:3000})
      }
    })
    }

    
  }

}
