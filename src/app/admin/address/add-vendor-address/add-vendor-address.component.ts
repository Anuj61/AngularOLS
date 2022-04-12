import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-add-vendor-address',
  templateUrl: './add-vendor-address.component.html',
  styleUrls: ['./add-vendor-address.component.css'],
})
export class AddVendorAddressComponent implements OnInit {
  vendors: Array<any> = [];
  vendorId: string = '';
  addressDetails: string = '';
  pincode: string = '';

  constructor(
    private addressService: AddressService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getVendor();
  }

  getVendor() {
    this.addressService.getVendors().subscribe((resp) => {
      this.vendors = resp.data;
    });
  }

  addAddress() {
    let address = {
      userId: this.vendorId,
      address: this.addressDetails,
      pincode: this.pincode,
    };
    console.log(address);
    this.addressService.addAddress(address).subscribe((resp) => {
      if (resp.status == 200) {
        this.toastr.success('', resp.msg, { timeOut: 3000 });
        this.router.navigateByUrl('/admin/listAddress');
      } else {
        console.log(resp);
        this.toastr.error('', resp.msg, { timeOut: 3000 });
      }
    });
  }
}
