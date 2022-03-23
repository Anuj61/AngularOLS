import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryName: string = ''

  constructor(private categoryService: CategoryService,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  addCategory(){

    let category = {
      categoryName : this.categoryName
    }

    this.categoryService.addCategory(category).subscribe(resp=>{
      if(resp.status == 200){
        this.toastr.success("", resp.msg, {timeOut:3000})
        this.router.navigateByUrl("/admin/listCategory")
      }else{
        this.toastr.error("", resp.data, {timeOut:3000})
      }
    })

  }
}
