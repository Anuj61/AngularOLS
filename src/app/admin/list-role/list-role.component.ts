import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/session.service';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {

  roles:Array<any> = [];

  constructor(private service:RoleService) { }

  ngOnInit(): void {
    this.service.listRole().subscribe(resp =>{
      console.log(resp)
      this.roles = resp.data
    })
  }

}