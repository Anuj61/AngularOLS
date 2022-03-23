import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  categories: Array<any> = []

  constructor(private categoryService: CategoryService, private toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.listAllCategories()
  }

  listAllCategories(){
    this.categoryService.listAllCategory().subscribe(resp=>{
      this.categories = resp.data
    })
  }

  delCategory(categoryId:any){
    this.categoryService.delCategory(categoryId).subscribe(resp=>{
      if(resp.status == 200){
        console.log(categoryId);
        
        this.toastr.success("", resp.msg, {timeOut:3000})
        this.listAllCategories()
      }
      else{
        this.toastr.error("", resp.msg, {timeOut:3000})
      }
    })
  }

  editCategoryById(categoryId: any){
    this.router.navigateByUrl("/admin/editCategory/"+categoryId)
  }

}
