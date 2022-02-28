import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpClient:HttpClient) { }

  addRole(role:any):Observable<any>{
    return this.httpClient.post("http://localhost:3000/roles",role)
  }

  listRole():Observable<any>{
    return this.httpClient.get("http://localhost:3000/roles")
  }

}

