import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private httpClient:HttpClient) { }


  listReview():Observable<any>{
    return this.httpClient.get("http://localhost:3000/reviews")
  }

  updateReview(review:any):Observable<any>{
    return this.httpClient.put("http://localhost:3000/reviews", review)
  }

}
