import { Component, OnInit } from '@angular/core';
import { Invoice } from '../shared/invoice.model';
import { CartService } from '../shared/cart.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  invoice:any;

  constructor(private cart: CartService,
            private location: Location) { }

  ngOnInit(): void {
    //this.invoice = this.cart.selectedInvoice;
    this.invoice = this.cart.selectedInvoice;
  }

  goBack(){
    this.location.back();
  }

  validate(){}

}
