import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
    persons:any
    person= new Person();
    
  constructor(private personService: PersonService) {
  }
  ngOnInit() :void{
    this.personService.getPersons().subscribe(
     data => {
      this.persons = JSON.parse(JSON.stringify(data))
     } ,err=>{
       if(err.status == 500 || err.status == 404){
         alert("Service persons not reachable")
       }
     }
    )

  }

  addPerson() {

    console.log(this.person)

    this.personService.addPerson(this.person)
      .subscribe(data => {
        document.location.reload(true);
      })      
  }

}
