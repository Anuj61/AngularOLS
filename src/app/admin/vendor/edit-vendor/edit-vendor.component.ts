import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.css'],
})
export class EditVendorComponent implements OnInit {
  categories: Array<any> = [];
  subCategoires: Array<any> = [];

  vendorId: string = '';
  vendorName: string = '';
  selectedSubCat: string = '';
  selectedCat: string = '';
  serviceDetail: string = '';
  timing: string = '';
  pricing: string = '';

  constructor(
    private vendorService: VendorService,
    private aRoute: ActivatedRoute,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.vendorId = this.aRoute.snapshot.params['vendorId'];
    this.listCategoires();
    this.listSubCategories();
    this.listVendorById(this.vendorId);
  }

  listSubCategories() {
    this.vendorService.listSubCategories().subscribe((resp) => {
      this.subCategoires = resp.data;
    });
  }

  listCategoires() {
    this.vendorService.listCategories().subscribe((resp) => {
      this.categories = resp.data;
    });
  }

  listVendorById(vendorId: any) {
    this.vendorService.listVendorById(this.vendorId).subscribe((resp) => {
      // console.log(resp);
      this.pricing = resp.data.price;
      this.vendorName = resp.data.userId.firstName;
      this.selectedCat = resp.data.subCatId.category.categoryName;
      this.selectedSubCat = resp.data.subCatId.serviceName;
      this.timing = resp.data.timing;
      console.log(this.selectedCat, this.selectedSubCat);
    });
  }

  updateVendorDetails() {
    const vendor = {
      vendorId: this.vendorId,
      subCatId: this.selectedSubCat,
      serviceDetail: this.serviceDetail,
      price: this.pricing,
      timing: this.timing,
    };

    this.vendorService.updateVendor(vendor).subscribe((resp) => {
      if (resp.status == 200) {
        this.toastr.success('', resp.msg, { timeOut: 3000 });
        this.route.navigateByUrl('/admin/listVendorDetails');
      } else {
        this.toastr.error('', resp.msg, { timeOut: 3000 });
      }
    });
  }
}
