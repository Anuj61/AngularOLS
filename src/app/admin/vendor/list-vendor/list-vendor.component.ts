import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-list-vendor',
  templateUrl: './list-vendor.component.html',
  styleUrls: ['./list-vendor.component.css']
})
export class ListVendorComponent implements OnInit {

  vendorDetails:Array<any> = []

  constructor(private vendorService:VendorService, private toastr:ToastrService, private route:Router) { }

  ngOnInit(): void {
    
    this.listAllVendorDetails()
  }

  listAllVendorDetails(){
    this.vendorService.listAllVendorDetails().subscribe(resp=>{
      this.vendorDetails = resp.data
      if(resp.status ==200){
        this.toastr.success("", resp.msg, {timeOut:3000})
      }else{
        this.toastr.error("", resp.msg, {timeOut:3000})
      }
    })
  }

}
