import { Component, OnInit } from '@angular/core';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  roleName:string = ""

  constructor(private roleService:RoleService, ) { }

  ngOnInit(): void {
  }

  saveRole(){
    let role = {roleName:this.roleName}
    this.roleService.addRole(role).subscribe(resp=>{
      console.log(resp)
    })
  }

}
