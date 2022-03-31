import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  users : Array<any> = []
  userId:string=""
  addressDetails:string=""
  pincode:string=""


  constructor(private router:Router, private addressService:AddressService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAddressUsers()
  }


  getAddressUsers(){
    this.addressService.addressUserAdd().subscribe(resp=>{
      this.users = resp.data;
      console.log(this.users)
    })
  }

  addAddress(){
    let address={
      userId: this.userId,
      address : this.addressDetails,
      pincode : this.pincode
    }

    this.addressService.addAddress(address).subscribe(resp=>{
      if(resp.status== 200){
        this.toastr.success("", resp.msg, {timeOut:3000})
        this.router.navigateByUrl("/admin/listAddress")
      }else{
        this.toastr.error("", resp.msg, {timeOut:3000})
      }
    })
  }

}
