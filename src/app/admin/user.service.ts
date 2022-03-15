import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  addUsers(user: any):Observable<any>{
    return this.httpClient.post("http://localhost:3000/users",user);
  }

  listAllUsers():Observable<any>{
    return this.httpClient.get("http://localhost:3000/users")
  }

  delUserById(userId:any):Observable<any>{
    return this.httpClient.delete("http://localhost:3000/users/"+userId)
  }

}
