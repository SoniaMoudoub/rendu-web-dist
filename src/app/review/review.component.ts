import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Review } from '../review';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
    reviews:any
    review= new Review();
    
  constructor(private reviewService: ReviewService) {
  }
  ngOnInit() :void{
    this.reviewService.getReviews().subscribe(
     data => {
      this.reviews = JSON.parse(JSON.stringify(data))
     } ,err=>{
       if(err.status == 500 || err.status == 404){
         alert("Service customers not reachable")
       }
     }
    )

  }

  addReview() {

    console.log(this.review)

    this.reviewService.addReview(this.review)
      .subscribe(data => {
        document.location.reload(true);
      })      
  }


      
  


}
