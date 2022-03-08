import { Component, OnInit } from '@angular/core';
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
  constructor(private sessionService:SessionService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login(){
    let user = {email:this.email, password:this.password}
    this.sessionService.authenticate(user).subscribe(resp=>{
      if(resp.status == 200){
        this.toastr.success("", resp.msg, {timeOut:3000})
      }
    })
  }

}
