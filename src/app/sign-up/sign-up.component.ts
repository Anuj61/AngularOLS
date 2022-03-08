import { Component, OnInit } from '@angular/core';
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
  constructor(private sessionService:SessionService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  saveuser(){
    
    //checking if user or serviceProvider
    if(this.roleName === "serviceProvider"){
      this.role = "621360a9529f58ee8d5c3f66"
    }else{
      this.role = "6213608a529f58ee8d5c3f64"//user
    }

    let user = {"firstName":this.firstName, "email":this.email, "password":this.password, "role":this.role}
    this.sessionService.saveUser(user).subscribe(resp=>{ ///subscribing to the event of service
      console.log(resp);
      if(resp.status == 200){
        this.toastr.success("", resp.msg, {timeOut:3000})
      }else{
        this.toastr.error("", resp.msg, {timeOut:3000})
      }
    })
  }

}
