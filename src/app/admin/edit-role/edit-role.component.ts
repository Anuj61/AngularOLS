import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {

  roleId:string = ""
  roleName:string = ""
  constructor(private aRoute:ActivatedRoute,private roleService:RoleService,private tsService:ToastrService,private router:Router) { }

  ngOnInit(): void {
      this.roleId = this.aRoute.snapshot.params["roleId"] 
      this.getRoleByRoleId(this.roleId)
  }


  getRoleByRoleId(roleId:any){
    this.roleService.listRoleById(this.roleId).subscribe(resp=>{
      console.log("inside getRole by Id")
      this.roleName = resp.data.roleName
    })
  }

  updateRole(){
  //  alert(this.roleId+" "+this.roleName)
  console.log("INside update role")
    let role = {
      roleId : this.roleId,
      roleName : this.roleName
    }
    this.roleService.updateRole(role).subscribe(resp=>{
      if(resp.status == 200){
          this.tsService.success("",resp.msg,{timeOut:3000})
          this.router.navigateByUrl("/admin/listRole")
        }else{
        this.tsService.error("",resp.msg,{timeOut:3000})
      }
    })
 
 }
}
