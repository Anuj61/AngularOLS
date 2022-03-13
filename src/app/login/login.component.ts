import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = ""
  password: string = ""

  emailError: string = ""
  passwordError: string =  ""
  

  
  constructor(private sessionService:SessionService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){

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

    if(isError){

    }else{
      let user = {email:this.email, password:this.password}

    // if(this.email == "" || this.password == ""){
    //   this.toastr.error("Please enter correct Details")
    // }ask sir for empty string number

    
    this.sessionService.authenticate(user).subscribe(resp=>{
      if(resp.status == 200){
        if(resp.data.role.roleName == "admin"){
          this.router.navigateByUrl("/admin/admin-dashboard")
        }
        else if(resp.data.role.roleName == "serviceProvider"){
          this.router.navigateByUrl("/serviceProvider-dashboard")
        }else{
          this.router.navigateByUrl("/user-dashboard")
        }
        this.toastr.success("", resp.msg, {timeOut:3000})
      }
    })
    }
  }

}
