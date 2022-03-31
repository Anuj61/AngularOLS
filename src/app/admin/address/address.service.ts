import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  addresses: Array<any>=[]

  constructor(private httpClient:HttpClient) { }

  listAllAddress():Observable<any>{
    return this.httpClient.get("http://localhost:3000/addresses")
  }

  addAddress(address:any):Observable<any>{
    return this.httpClient.post("http://localhost:3000/addresses", address)
  }

  listAddressUser():Observable<any>{
    return this.httpClient.get("http://localhost:3000/userAddress")
  }

  addressUserAdd():Observable<any>{
    return this.httpClient.get("http://localhost:3000/listUserAddress")
  }
}
