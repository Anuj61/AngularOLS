import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  addresses: Array<any>=[]

  constructor(private httpClient:HttpClient) { }

  //list all address
  listAllAddress():Observable<any>{
    return this.httpClient.get("http://localhost:3000/addresses")
  }
  
  //list address by id
  listAddressById(addressId:any):Observable<any>{
    return this.httpClient.get("http://localhost:3000/addressesById/"+ addressId)
  }

  //adding address of only users
  addAddress(address:any):Observable<any>{
    return this.httpClient.post("http://localhost:3000/addresses", address)
  }

  //for getting only users address
  listAddressUser():Observable<any>{
    return this.httpClient.get("http://localhost:3000/userAddress")
  }
  
  //for addging only user address
  addressUserAdd():Observable<any>{
    return this.httpClient.get("http://localhost:3000/listUserAddress")
  }

  //deleting address
  delAddress(addressId:any):Observable<any>{
    return this.httpClient.delete("http://localhost:3000/addresses/"+addressId)
  }

  //upadating address
  updateAddress(address:any):Observable<any>{
    return this.httpClient.put("http://localhost:3000/addresses", address)
  }
}
