import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from '../shared/invoice.model';
import { CustomerService } from '../shared/customer.service';
import { Location } from '@angular/common';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap

  searchTxt: string = '';

  customers: Customer[] = [];
  selectedCustomer: Customer;
  
  status: boolean = false;
  editStatus: boolean = false;
  selectStatus: boolean = false;

  constructor(private customerService: CustomerService,
              private location: Location) { }

  zoom = 13;
  options = this.customerService.options;
  center: google.maps.LatLngLiteral
  markerPosition: google.maps.LatLngLiteral;

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers()
    // navigator.geolocation.getCurrentPosition(position => {
    //   this.center = {
    //     lat: position.coords.latitude,
    //     lng: position.coords.longitude,
    //   }
    // })

  }

  addCustomer(customer){
    this.customerService.addCustomer(customer);
    this.status = false;
  }
  
  selectCustomer(customer){
    this.selectedCustomer = customer;

    //assign google map details
    let lat = this.selectedCustomer.location.latitude;
    let lng = this.selectedCustomer.location.longitude;
    if (this.selectedCustomer.location){
      this.center = {
        lat: lat,
        lng: lng
      }
      this.markerPosition = {lat, lng}
    }
    else{
      this.center = {
        lat: 0.0,
        lng: 0.0
      }
    }
  
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

  zoomIn(){
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }

  zoomOut(){
      if (this.zoom > this.options.minZoom) this.zoom--;
  }

}
