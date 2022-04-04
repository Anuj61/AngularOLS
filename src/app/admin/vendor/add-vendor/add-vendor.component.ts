import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {

  categories:Array<any> = []
  selectedCat:String= ""

  constructor(private vendorService:VendorService, private toastr:ToastrService, private route:Router) { }

  ngOnInit(): void {
    this.listCategoires()
  }

  

  listCategoires(){
    this.vendorService.listCategories().subscribe(resp=>{
      this.categories = resp.data
    })
  }
}
