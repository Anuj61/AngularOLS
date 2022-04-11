import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private token: string = '';
  private tokenTimer: any;
  private userId: string = '';
  private roleName: string = '';

  private authStatusListener = new BehaviorSubject<boolean>(false);

  constructor(private httpService: HttpClient, private router: Router) {}

  get IsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  get Token(): string {
    return this.token;
  }

  get UserId(): string {
    return this.userId;
  }

  get RoleName(): string {
    return this.roleName;
  }

  get AuthStatusListener(): Observable<boolean> {
    return this.authStatusListener.asObservable();
  }

  login(authData: { email: string; password: string; role: string }) {
    this.httpService
      .post<{
        message: string;
        data: {
          token: string;
          expiresIn: number;
          userId: string;
          role: string;
        };
      }>(environment.backend_url + '/loginJWT', authData)
      .pipe(map((response) => response.data))
      .subscribe((data) => {
        this.token = data.token;
        if (this.token) {
          const expiresInDuration = data.expiresIn;

          // Token Expiration Time manage
          this.setAuthTimer(expiresInDuration);

          this.isAuthenticated = true;
          this.userId = data.userId;
          this.roleName = data.role;
          this.authStatusListener.next(this.isAuthenticated);

          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + expiresInDuration * 1000
          );

          this.saveAuthData(
            this.token,
            expirationDate,
            this.userId,
            this.roleName
          );
        }
      });
  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(
    token: string,
    expirationDate: Date,
    userId: string,
    roleName: string
  ) {
    localStorage.setItem('token', token);
    localStorage.setItem('expirationDate', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
    localStorage.setItem('roleName', roleName);
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expirationDate');
    const userId = localStorage.getItem('userId');
    const roleName = localStorage.getItem('roleName');

    if (!token || !expirationDate || !userId || !roleName) {
      return;
    }

    return {
      token,
      expirationDate: new Date(expirationDate),
      userId,
      roleName,
    };
  }

  logout() {
    this.token = '';
    this.userId = '';
    this.isAuthenticated = false;
    this.roleName = '';
    this.authStatusListener.next(false);

    clearTimeout(this.tokenTimer);

    this.clearAuthData();

    this.router.navigate(['/']);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    localStorage.removeItem('roleName');
  }

  autoAuth() {
    const authInfo = this.getAuthData();
    if (!authInfo) {
      return;
    }

    const now = new Date();
    const expiresIn = authInfo.expirationDate.getTime() - now.getTime();

    if (expiresIn > 0) {
      this.token = authInfo.token;
      this.isAuthenticated = true;
      this.authStatusListener.next(this.isAuthenticated);
      this.roleName = authInfo.roleName;

      this.setAuthTimer(expiresIn / 1000);
    } else {
      this.logout();
    }
  }
}
