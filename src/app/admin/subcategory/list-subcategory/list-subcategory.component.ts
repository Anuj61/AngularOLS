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

  constructor(private subCatService:SubcategoryService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.listAllSubCat()
  }

  listAllSubCat(){
    this.subCatService.listAllSubCat().subscribe(resp=>{
      this.subCategories = resp.data
      
    })
  }


}
