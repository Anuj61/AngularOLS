import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  email: string = '';
  password: string = '';

  emailError: string = '';
  passwordError: string = '';

  private isAuthenticated = false;

  private authSub: Subscription;

  constructor(
    private sessionService: SessionService,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService
  ) {
    this.authSub = this.authService.AuthStatusListener.subscribe(
      (authStatus) => {
        this.isAuthenticated = authStatus;
        if (authStatus) {
          this.router.navigate(['/admin/admin-dashboard']);
        }
      }
    );
  }

  ngOnInit(): void {}

  login() {
    // console.log('start');

    let isError = false;
    if (this.email == '' || this.email.trim().length == 0) {
      this.emailError = 'Please Enter email';
      isError = true;
    } else {
      this.emailError = '';
    }

    if (this.password == '' || this.password.trim().length == 0) {
      this.passwordError = 'Please Enter password';
      isError = true;
    } else {
      this.passwordError = '';
    }

    if (isError) {
    } else {
      // console.log('Inside else');

      const user = {
        email: this.email,
        password: this.password,
        role: 'admin',
      };

      // if(this.email == "" || this.password == ""){
      //   this.toastr.error("Please enter correct Details")
      // }ask sir for empty string number

      // this.sessionService.authenticate(user).subscribe((resp) => {
      //   if (resp.status == 200) {
      //     console.log('inside status 200');
      //     if (resp.data.role.roleName == 'admin') {
      //       console.log('inside admin');

      //       this.router.navigateByUrl('/admin/admin-dashboard');
      //     } else if (resp.data.role.roleName == 'serviceProvider') {
      //       this.router.navigateByUrl('/serviceProvider-dashboard');
      //     } else {
      //       this.router.navigateByUrl('/user-dashboard');
      //     }
      //     this.toastr.success('', resp.msg, { timeOut: 3000 });
      //   } else {
      //     this.toastr.error('Invalid credentials');
      //   }
      // });

      this.authService.login(user);
    }
  }

  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }
}
