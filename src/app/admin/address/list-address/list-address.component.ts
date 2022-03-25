import { computeMsgId } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css']
})
export class ListAddressComponent implements OnInit {

  constructor(private addressService:AddressService, private toastr:ToastrService) { }

  addresses:Array<any>= []

  ngOnInit(): void {
    this.listAllAddresses()
  }

  listAllAddresses(){
    this.addressService.listAllAddress().subscribe(resp=>{
      this.addresses = resp.data
      console.log(this.addresses)
    })
  }

}
