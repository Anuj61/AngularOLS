import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private sessionService:SessionService, private router:Router, private toastr:ToastrService) { }

  email:string= ""

  ngOnInit(): void {
  }


  recoverPassword(){
    // alert(this.email)
    let user = {email:this.email}
    this.sessionService.sendOtpForPassword(user).subscribe(resp=>{

    
      if(resp.status == -1){
        this.toastr.error("", resp.msg, {timeOut:3000})
      }else{
        this.toastr.success("", resp.msg, {timeOut:3000})
        this.router.navigateByUrl("/changePassword")
        
      }
    })
  }


}
