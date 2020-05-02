import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { PublishingHouse} from '../publishinghouse';
import { publishinghouseService } from '../publishinghouse.service';

@Component({
  selector: 'app-publishinghouse',
  templateUrl: './publishinghouse.component.html',
  styleUrls: ['./publishinghouse.component.css']
})
export class publishinghouseComponent implements OnInit {
    publishinghouses:any
    publishinghouse= new PublishingHouse();
    
  constructor(private publishinghouseService: publishinghouseService) {
  }
  ngOnInit() :void{
    this.publishinghouseService.getPublishingHouses().subscribe(
     data => {
      this.publishinghouses = JSON.parse(JSON.stringify(data))
     } ,err=>{
       if(err.status == 500 || err.status == 404){
         alert("Service customers not reachable")
       }
     }
    )

  }

  addPublishingHouse() {

    console.log(this.publishinghouse)

    this.publishinghouseService.addPublishingHouse(this.publishinghouse)
      .subscribe(data => {
        document.location.reload(true);
      })      
  }

}
