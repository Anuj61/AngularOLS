import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SubcategoryService } from '../subcategory.service';

@Component({
  selector: 'app-list-subcategory',
  templateUrl: './list-subcategory.component.html',
  styleUrls: ['./list-subcategory.component.css']
})
export class ListSubcategoryComponent implements OnInit {

  subCategories:Array<any> = []

  constructor(private subCatService:SubcategoryService, private toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.listAllSubCat()
  }

  listAllSubCat(){
    this.subCatService.listAllSubCat().subscribe(resp=>{
      this.subCategories = resp.data
      
    })
  }

  delSubCat(subCatId:any){
    this.subCatService.delSubCatById(subCatId).subscribe(resp=>{
      if(resp.status == 200){
        console.log(subCatId);
        
        this.toastr.success("", resp.msg, {timeOut:3000})
        this.listAllSubCat()
      }
      else{
        this.toastr.error("", resp.msg, {timeOut:3000})
      }
    })
  }

  editSubCat(subCatId:any){
    this.router.navigateByUrl("/admin/editSubCategory/"+subCatId)
  }

 


}
