import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  categoryId:string = "";
  categoryName: string = "";

  constructor(private categoryService: CategoryService, private aRoute:ActivatedRoute, private toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.categoryId = this.aRoute.snapshot.params["categoryId"];
    this.getCategoryById(this.categoryId)
  }

  getCategoryById(categoryId: any){
    this.categoryService.listCategoryById(categoryId).subscribe(resp=>{
      this.categoryName = resp.data.categoryName;
    })
  }

  editCategory(){
    let category = {
      categoryId: this.categoryId,
      categoryName: this.categoryName
    }

    this.categoryService.editCategory(category).subscribe(resp=>{
      if(resp.status == 200){
        this.toastr.success("", resp.msg, {timeOut:3000})
        this.router.navigateByUrl("/admin/listCategory")
      }else{
        this.toastr.error("", resp.msg, {timeOut:3000})
      }
    })
  }

}
