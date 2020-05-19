import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/invoice.model';
import { CustomerService } from '../shared/customer.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];
  selectedCustomer: Customer;
  
  constructor(private customerService: CustomerService,
              private location: Location) { }

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers()
  }

  addCustomer(customer){
    this.customerService.addCustomer(customer);
  }
  
  selectCustomer(customer){
    this.selectedCustomer = customer;
  }

  goBack(){
    this.location.back();
  }

  setCustomer(customer){
    this.customerService.setCustomer(customer);
    //console.log(selectedCustomer)
    this.location.back();
  }


}
