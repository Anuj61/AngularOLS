import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SubcategoryService } from '../subcategory.service';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent implements OnInit {

  categories: Array<any> = []
  serviceName: string = ""
  catId: string = ""

  constructor(private subcatService:SubcategoryService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {

    this.getCategories()
  }


  getCategories(){
    this.subcatService.listAllCategory().subscribe(resp=>{
      console.log(resp)
      this.categories = resp.data
    })
  }

  addSubCat(){
    let subcategory = {
      categoryId : this.catId,
      serviceName: this.serviceName
    }


    this.subcatService.addSubCat(subcategory).subscribe(resp=>{
      if(resp.status == 200){
        this.router.navigateByUrl("/admin/listSubCategory")
        this.toastr.success("", resp.msg, {timeOut:3000})
        
      }else{
        this.toastr.error("", resp.msg, {timeOut:3000})
      }
    })
  }

}
