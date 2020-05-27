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

  searchTxt: string = '';

  customers: Customer[] = [];
  selectedCustomer: Customer;
  
  status: boolean = false;
  editStatus: boolean = false;
  selectStatus: boolean = false;

  constructor(private customerService: CustomerService,
              private location: Location) { }

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers()
    console.log(this.customers.length)
  }

  addCustomer(customer){
    this.customerService.addCustomer(customer);
    this.status = false;
  }
  
  selectCustomer(customer){
    this.selectedCustomer = customer;
    this.selectStatus = true;
    this.status = false;
    this.editStatus = false;
  }

  goBack(){
    this.location.back();
  }

  setCustomer(customer){
    this.customerService.setCustomer(customer);
    this.location.back();
  }

  displayAppAdd(){
    this.status = true;
    this.editStatus = false;
    this.selectStatus = false;
  }

  displayAppEdit(){
    this.editStatus = true;
    this.status = false;
    this.selectStatus = false;
  }

  getStatus(status){
    this.status = status;
  }

  getEditStatus(status){
    this.editStatus = status;
  }

}
