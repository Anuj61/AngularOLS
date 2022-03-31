import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReviewsService } from '../reviews.service';

@Component({
  selector: 'app-list-review',
  templateUrl: './list-review.component.html',
  styleUrls: ['./list-review.component.css']
})
export class ListReviewComponent implements OnInit {

  constructor(private reviewService:ReviewsService, private router:Router, private toastr:ToastrService) { }

  reivews:Array<any> = []
  isActive:any;

  ngOnInit(): void {
    this.listAllReviews();
  }


  listAllReviews(){
    this.reviewService.listReview().subscribe(resp=>{
      this.reivews = resp.data
      // console.log(resp)
    })
  }

  disableEnable(reviewId:any, isActive:any){
    let review = {
      reviewId: reviewId,
      isActive: !isActive
    }
    
    this.reviewService.disableReview(review).subscribe(resp=>{
      console.log(resp)
    })
  }

}
