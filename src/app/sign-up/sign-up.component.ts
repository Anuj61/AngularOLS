import { Component, OnInit } from '@angular/core';
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
  // roleName : string = ""
  constructor(private sessionService:SessionService) { }

  ngOnInit(): void {
  }

  saveuser(){
    
    let user = {"firstName":this.firstName, "email":this.email, "password":this.password, "role":"6213608a529f58ee8d5c3f64"}
    this.sessionService.saveUser(user).subscribe(resp=>{ ///subscribing to the event of service
      console.log(resp);
    })
  }

}
