import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';

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

  delRole(roleId:any):Observable<any>{
    return this.httpClient.delete("http://localhost:3000/roles/"+roleId)
  }
  
  updateRole(role:any):Observable<any>{
    return this.httpClient.put("http://localhost:3000/roles",role)
  }

  listRoleById(roleId:any):Observable<any>{
    return this.httpClient.get("http://localhost:3000/roles/"+roleId)
  }

}

