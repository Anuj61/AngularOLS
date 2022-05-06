import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  otp: string = '';
  passwordError: string = '';
  confirmPasswordError: string = '';
  notEqual: string = '';
  isError: boolean = false;
  password: string = '';
  confirmPassword: string = '';
  isCorrect: boolean = false;

  constructor(
    private sessionService: SessionService,
    private tsService: ToastrService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  checkOTP() {
    let otp = {
      otp: this.otp,
      email: localStorage.getItem('email'),
      password: this.password,
    };
    if (this.password == '' || this.password.trim().length == 0) {
      this.passwordError = 'Please Enter password';
      this.isError = true;
    } else {
      this.passwordError = '';
    }
    if (this.confirmPassword == '' || this.confirmPassword.trim().length == 0) {
      this.confirmPasswordError = 'Please Enter something';
      this.isError = true;
    } else {
      this.confirmPasswordError = '';
    }

    if (this.password != this.confirmPassword) {
      this.isError = true;
      this.notEqual = 'Password does not match';
    } else {
      this.sessionService.checkOTP(otp).subscribe((resp) => {
        if (resp.status == 200) {
          let pass = {
            email: localStorage.getItem('email'),
            password: this.password,
          };
          this.sessionService.updatePass(pass).subscribe((resp) => {
            if (resp.status == 200) {
              this.tsService.success('', resp.msg, { timeOut: 3000 });
              this.route.navigateByUrl('login');
            } else {
              this.tsService.error('', resp.msg, { timeOut: 3000 });
            }
          });
        } else {
          this.tsService.error('Not correct otp', resp.msg, { timeOut: 3000 });
        }
      });
    }
  }
}
