import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  listAllCategory():Observable<any>{
    return this.httpClient.get("http://localhost:3000/categories")
  } 

  listCategoryById(categoryId:any):Observable<any>{
    return this.httpClient.get("http://localhost:3000/categories/"+categoryId)
  }

  addCategory(category: any):Observable<any>{
    return this.httpClient.post("http://localhost:3000/categories", category)
  }

  delCategory(categoryId:any):Observable<any>{
    return this.httpClient.delete("http://localhost:3000/categories/"+categoryId)
  }

  editCategory(category:any):Observable<any>{
    return this.httpClient.put("http://localhost:3000/categories", category)
  }
}
