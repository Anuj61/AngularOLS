import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

constructor(private service:UserService, private toastr:ToastrService, private route: Router) { }

  users:Array<any>=[]

  ngOnInit(): void {
    this.listAllUsers()
  }

  listAllUsers(){
    this.service.listAllUsers().subscribe(resp=>{
      
      this.users = resp.data;
    })
  }

  delUserById(userId: any){
    this.service.delUserById(userId).subscribe(resp=>{
      if(resp.status == 200){//if success 
        this.toastr.success(" ",resp.msg, {timeOut:3000})
        this.listAllUsers()
      }else{
        this.toastr.error("",resp.msg,{timeOut:3000})
      }
    })
  }

  editUserById(userId:any){
    this.route.navigateByUrl("/admin/editUser/"+userId)
  }

}
