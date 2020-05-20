import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomerService } from '../../shared/customer.service'
import { Customer } from 'src/app/shared/invoice.model';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  @Input() data:Customer;
  @Output() eventClick = new EventEmitter()

  customerName;customerPhone;customerState;customerCity;customerStreet;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    
  }

  editCustomer(formValuse){
    let customer:{name, phone, add:{state, city, street} }
    customer = {
      name: formValuse.customerName, 
      phone: formValuse.customerPhone,
      add:{state: formValuse.customerState , 
          city: formValuse.customerCity, 
          street: formValuse.customerStreet}}
      this.customerService.editCustomer(customer);
  }
  
  onCencel(){
    let editStatus: boolean = false;
    this.eventClick.emit(editStatus)
  }

}