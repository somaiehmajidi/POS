import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/invoice.model';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];
  selectedCustomer;
  
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers()
  }

  addCustomer(customer){
    this.customerService.addCustomer(customer);
  }
  
  selectCustomer(customer){
    this.selectedCustomer = customer;
  }



}
