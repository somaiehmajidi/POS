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

 

  customerName;customerPhone;customerState;customerCity;customerStreet; customerLocation;

  constructor(private customerService: CustomerService) { }

  options = this.customerService.options;
  center: google.maps.LatLngLiteral;
  markerPosition: google.maps.LatLngLiteral;
  zoom = 13;

  ngOnInit(): void {
    let lat = this.data.location.latitude
    let lng = this.data.location.longitude

    this.center = {
      lat: lat,
      lng: lng
    }
    this.markerPosition = {lat, lng}
  }
  
  
  
  // markerPosition: google.maps.LatLngLiteral;

  editCustomer(formValuse){
    let customer:{firstName, lastName, phone, add:{state, city, street} }
    customer = {
      firstName: formValuse.customerFirstName, 
      lastName: formValuse.customerLastName, 
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
