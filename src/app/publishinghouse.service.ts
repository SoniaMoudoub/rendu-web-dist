import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { PublishingHouse} from './publishinghouse';


@Injectable({
  providedIn: 'root'
})
export class publishinghouseService {
  private host:string="http://localhost:8383/"
  private publishinghousesUrl:string= this.host+"publishinghouses/"
  publishinghouse:PublishingHouse;
  constructor(private http:HttpClient) { }

  getPublishingHouses(){
    return this.http.get(this.publishinghousesUrl)
  }
  addPublishingHouse(publishinghouse){
    const headers = { 'content-type': 'application/json'}  
    console.log(publishinghouse)
    return this.http.post(this.publishinghousesUrl, publishinghouse,{'headers':headers})
  }

}