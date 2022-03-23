import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(private httpClient: HttpClient) { }

  addSubCat(subcategory:any):Observable<any>{
    return this.httpClient.post("http://localhost:3000/subcategories", subcategory)
  }

  listAllSubCat():Observable<any>{
    return this.httpClient.get("http://localhost:3000/subcategories")
  }

  listSubCatById(subCatId:any):Observable<any>{
    return this.httpClient.get("http://localhost:3000/subcategories/"+subCatId)
  }

  updateSubCat(subcategory:any):Observable<any>{
    return this.httpClient.put("http://localhost:3000/subcategories", subcategory)
  }

  delSubCatById(subCatId:any):Observable<any>{
    return this.httpClient.delete("http://localhost:3000/subcategories/"+subCatId)
  }
}
