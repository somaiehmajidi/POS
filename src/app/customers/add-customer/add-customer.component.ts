import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomerService } from '../../shared/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  @Output() eventClick = new EventEmitter()
  customerFirstName;
  customerLastName;
  customerPhone;
  customerState;
  customerCity;
  customerStreet;


  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  newCustomer(formValuse){
    let customer:{id, firstName, lastName, phone, add:{state, city, street}};
    customer = 
    { id:6, 
      firstName:formValuse.customerFirstName, 
      lastName:formValuse.customerLastName,
      phone:formValuse.customerPhone, 
      add:{
        state:formValuse.customerState, 
        city: formValuse.customerCity, 
        street: formValuse.customerStreet}
      }
    this.customerService.addCustomer(customer);
  }

  onCencel(){
    let status: boolean = false;
    this.eventClick.emit(status)
  }
}
