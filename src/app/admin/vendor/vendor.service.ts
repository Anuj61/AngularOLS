import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  constructor(private httpClient: HttpClient) {}

  listAllVendorDetails(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/vendorDetails');
  }

  listVendorName(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/listOnlyVendors');
  }

  listVendorById(vendorId: any): Observable<any> {
    return this.httpClient.get(
      'http://localhost:3000/vendorDetails/' + vendorId
    );
  }

  listCategories(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/categories');
  }

  listSubCategories(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/subcategories');
  }

  addVendor(vendorDetails: any): Observable<any> {
    return this.httpClient.post(
      'http://localhost:3000/vendorDetails',
      vendorDetails
    );
  }

  delVendor(vendorId: any): Observable<any> {
    return this.httpClient.delete(
      environment.backend_url + '/vendorDetails/' + vendorId
    );
  }

  updateVendor(vendor: any): Observable<any> {
    return this.httpClient.put('http://localhost:3000/vendorDetails', vendor);
  }
}
