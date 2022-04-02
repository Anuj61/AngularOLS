import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {

  addressId: string =""
  addressDetails : string =""
  pincode: string = ""
  firstName:string = ""

  constructor(private aRoute:ActivatedRoute,private addressService:AddressService,private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.addressId = this.aRoute.snapshot.params["addressId"];
    this.listByAddressId()
  }

  listByAddressId(){
    this.addressService.listAddressById(this.addressId).subscribe(resp=>{
      // console.log(resp)
      this.addressDetails = resp.data.address
      this.pincode = resp.data.pincode
      this.firstName = resp.data.userId.firstName
    })
  }

  updateAddress(){
    let address = {
      addressId: this.addressId,
      addressDetails : this.addressDetails,
      pincode:this.pincode
    }
    this.addressService.updateAddress(address).subscribe(resp=>{
      if(resp.status == 200){
        this.router.navigateByUrl("/admin/listAddress")
        this.toastr.success("",resp.msg, {timeOut:3000})

      }else{
        this.toastr.error("", resp.msg, {timeOut:3000})
      }
    })
  }

}
