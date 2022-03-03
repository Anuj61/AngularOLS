import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/app/session.service';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {

  roles:Array<any> = [];

  constructor(private service:RoleService, private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.listAllRoles()
  }

  listAllRoles(){
    this.service.listRole().subscribe(resp =>{
      console.log(resp)
      this.roles = resp.data
    })
  }

  deleteRoleById(roleId:any){
    this.service.delRole(roleId).subscribe(resp =>{
      if(resp.status == 200){//if success 
        this.toastr.success(" ",resp.msg, {timeOut:3000})
        this.listAllRoles()
      }else{
        this.toastr.error("",resp.msg,{timeOut:3000})
      }
    })
  }

}
