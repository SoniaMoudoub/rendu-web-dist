import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
 customers:any
 //customer:Customer;
 customer = new Customer();
    
  constructor(private customerService: CustomerService) {
  }
  ngOnInit() :void{
    this.customerService.getCustomers().subscribe(
     data => {
      this.customers = JSON.parse(JSON.stringify(data))
     } ,err=>{
       if(err.status == 500 || err.status == 404){
         alert("Service customers not reachable")
       }
     }
    )

  }

  addCustomer() {
    console.log(this.customer)

    this.customerService.addCustomer(this.customer)
      .subscribe(data => {
        document.location.reload(true);
      })      
  }


      
  


}

 /* onSubmitWithoutService(customerData) {
      // Process checkout data here
      console.warn('Your customer has been submitted', customerData);
      this.customers.push(customerData);
      // this.checkoutForm.reset();
    }

  onSubmitWithService(customerData) {
      // Process checkout data here
      console.warn('Your customer has been submitted via a service', customerData);
      this.customerService.addCustomer(customerData);
      // this.checkoutForm.reset();
    }*/
