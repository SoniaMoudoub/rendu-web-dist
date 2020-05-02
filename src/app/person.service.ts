import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Person} from './person';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private host:string="http://localhost:8181/"
  private personsUrl:string= this.host+"persons/"
  person:Person;
  constructor(private http:HttpClient) { }

  getPersons(){
    return this.http.get(this.personsUrl)
  }
  addPerson(person){
    const headers = { 'content-type': 'application/json'}  
    console.log(person)
    return this.http.post(this.personsUrl, person,{'headers':headers})
  }

}