import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Customer } from './customer';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private host:string="http://localhost:8282/"
  private customersUrl:string= this.host+"customers/"
  customer=new Customer();

  constructor(private http:HttpClient) { }



  getCustomers(){
    return this.http.get(this.customersUrl)
  }
  addCustomer(customer){
    const headers = { 'content-type': 'application/json'}  
    console.log(customer)
    return this.http.post(this.customersUrl, customer ,{'headers':headers})
  }
  
}