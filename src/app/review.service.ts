import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Review} from './review';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private host:string="http://localhost:8383/"
  private reviewsUrl:string= this.host+"reviews/"
  review:Review;
  constructor(private http:HttpClient) { }

  getReviews(){
    return this.http.get(this.reviewsUrl)
  }
  addReview(review){
    const headers = { 'content-type': 'application/json'}  
    console.log(review)
    return this.http.post(this.reviewsUrl, review,{'headers':headers})
  }

}