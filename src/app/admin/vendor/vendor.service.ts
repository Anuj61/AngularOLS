import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor( private httpClient:HttpClient) { }


  listAllVendorDetails():Observable<any>{
    return this.httpClient.get("http://localhost:3000/vendorDetails")
  }

  listVendorName():Observable<any>{
    return this.httpClient.get("http://localhost:3000/listVendorName")
  }

  listCategories():Observable<any>{
    return this.httpClient.get("http://localhost:3000/categories")
  }
}
