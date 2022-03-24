import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SubcategoryService } from '../subcategory.service';

@Component({
  selector: 'app-edit-subcategory',
  templateUrl: './edit-subcategory.component.html',
  styleUrls: ['./edit-subcategory.component.css']
})
export class EditSubcategoryComponent implements OnInit {

  constructor(private subCatService:SubcategoryService, private router:Router, private toastr:ToastrService, private aRoute:ActivatedRoute) { }

  serviceName:string = ""
  subCatId: string = ""


  ngOnInit(): void {
    this.subCatId = this.aRoute.snapshot.params["subCatId"]
    this.getSubCategoryById(this.subCatId)
  }


  getSubCategoryById(subCatId: any){
    this.subCatService.listSubCatById(subCatId).subscribe(resp=>{
      console.log(resp)
      this.serviceName = resp.data.serviceName;
      console.log(this.serviceName)
    })
  }

  editSubCategory(){
    let subcategory = {
      subCatId: this.subCatId,
      serviceName: this.serviceName
    }

    this.subCatService.updateSubCat(subcategory).subscribe(resp=>{
      if(resp.status == 200){
        this.toastr.success("", resp.msg, {timeOut:3000})
        this.router.navigateByUrl("/admin/listSubCategory")
      }else{
        this.toastr.error("", resp.msg, {timeOut:3000})
      }
    })
  }

}
