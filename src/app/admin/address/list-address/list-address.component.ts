import { computeMsgId } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css']
})
export class ListAddressComponent implements OnInit {

  constructor(private addressService:AddressService, private toastr:ToastrService, private route:Router) { }

  addresses:Array<any>= []

  ngOnInit(): void {
    this.listAllAddresses()
  }

  listAllAddresses(){
    this.addressService.listAllAddress().subscribe(resp=>{
      this.addresses = resp.data
    })
  }

  delAddress(addressId: any){
    this.addressService.delAddress(addressId).subscribe(resp=>{
      if(resp.status == 200){
        this.toastr.success("", resp.msg, {timeOut:3000})
        this.listAllAddresses()
      }else{
        this.toastr.error("", resp.msg,{timeOut:3000})
      }
    })
  }

  editAddress(addressId:any){
    this.route.navigateByUrl("/admin/editAddress/"+addressId)
  }
 

}
