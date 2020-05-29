import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { CustomerService } from '../../shared/customer.service';
import { GoogleMap, MapMarker } from '@angular/google-maps';
import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  @Output() eventClick = new EventEmitter()
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap

  customerFirstName;
  customerLastName;
  customerPhone;
  customerState;
  customerCity;
  customerStreet;


  constructor(private customerService: CustomerService) { }
  
  zoom = 6;
  options = this.customerService.options;
  center: google.maps.LatLngLiteral;
  markerPosition: google.maps.LatLngLiteral;
  markerOptions = {
    draggable: true,
    animation: google.maps.Animation.DROP
  }

  ngOnInit(): void {
    let lat = 35.715298;
    let lng = 51.404343;
    this.center = {lat: lat, lng: lng}
    this.markerPosition = {lat, lng} 
  }

  onChange(value:string){
    console.log(value)
  }

  newCustomer(formValuse){
    let customer:{id, firstName, lastName, phone, add:{state, city, street}, location:{latitude, longitude}};
    customer = 
    { id:6, 
      firstName:formValuse.customerFirstName, 
      lastName:formValuse.customerLastName,
      phone:formValuse.customerPhone, 
      add:{
        state:formValuse.customerState, 
        city: formValuse.customerCity, 
        street: formValuse.customerStreet
      },
      location:{
        latitude: this.markerPosition.lat,
        longitude: this.markerPosition.lng
      }
    }
    this.customerService.addCustomer(customer);
    //console.log(customer)
  }

  onCencel(){
    let status: boolean = false;
    this.eventClick.emit(status)
  }

  dargEnd(event: google.maps.MouseEvent){
    let position = event.latLng.toJSON()
    this.markerPosition = position;
  }

  zoomIn(){
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }

  zoomOut(){
      if (this.zoom > this.options.minZoom) this.zoom--;
  }
  
}
