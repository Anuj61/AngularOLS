import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient: HttpClient) { }

  //api calling
  //HttpClient =->method

  saveUser(user:any){
    console.log(user);
  }

  authenticate(user:any){
    console.log(user)
  }
}
