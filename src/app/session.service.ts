import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient: HttpClient) { }

  //api calling
  //HttpClient =->method

  saveUser(user:any):Observable<any>{//observing that subscribe component
    console.log(user);
    //node api
    return this.httpClient.post("http://localhost:3000/users",user)
  }

  authenticate(user:any){
    console.log(user)
  }
}
