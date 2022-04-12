import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  addresses: Array<any> = [];

  constructor(private httpClient: HttpClient) {}

  //list users for drop down
  getUsers(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/addresses/list/user');
  }

  //list vendor for drop down
  getVendors(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/addresses/list/vendor');
  }
  //common apis

  //adding address
  addAddress(address: any): Observable<any> {
    return this.httpClient.post('http://localhost:3000/addresses', address);
  }

  //list all address
  listAllAddress(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/addresses');
  }

  //list address by id
  listAddressById(addressId: any): Observable<any> {
    return this.httpClient.get('http://localhost:3000/addresses/' + addressId);
  }

  //deleting address
  delAddress(addressId: any): Observable<any> {
    return this.httpClient.delete(
      'http://localhost:3000/addresses/' + addressId
    );
  }

  //upadating address
  updateAddress(address: any): Observable<any> {
    return this.httpClient.put('http://localhost:3000/addresses', address);
  }
}
