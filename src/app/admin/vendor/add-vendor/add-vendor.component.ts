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

  subCategoires:Array<any> = []
  selectedSubCat:String = ""

  vendors:Array<any> = []
  selectedVendor: string = ""


  serviceDetails:string = ""
  price:string = ""
  timing:string = ""

  constructor(private vendorService:VendorService, private toastr:ToastrService, private route:Router) { }

  ngOnInit(): void {
    this.listCategoires()
    this.listSubCategories()
    this.listVendors()
  }

  listVendors(){
    this.vendorService.listVendorName().subscribe(resp=>{
      this.vendors = resp.data
    })
  }

  listSubCategories(){
    this.vendorService.listSubCategories().subscribe(resp=>{
      this.subCategoires = resp.data
    })
  }

  listCategoires(){
    this.vendorService.listCategories().subscribe(resp=>{
      this.categories = resp.data
    })
  }

  addVendorDetails(){
    let vendorDetails = {
      userId:this.selectedVendor,
      subCatId:this.selectedSubCat,
      serviceDetails:this.serviceDetails,
      price:this.price,
      timing:this.timing
    }
    this.vendorService.addVendor(vendorDetails).subscribe(resp=>{
      if(resp.status == 200){
        this.toastr.success("", resp.msg, {timeOut:3000})
        this.route.navigateByUrl("/admin/listVendorDetails")
      }else{
        this.toastr.error("", resp.msg,{timeOut:3000} )
      }
    })
  }
}
