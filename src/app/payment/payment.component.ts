import { Component, OnInit } from '@angular/core';
import { Invoice } from '../shared/invoice.model';
import { Factor, Payment } from '../shared/factor.model';
import { CartService } from '../shared/cart.service';
import { CustomerService } from '../shared/customer.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  invoice:any;
  customer:any;
  paymentTypes:string[] = ['نقد','کارت']
  factor: Factor[] = [];
  payment: Payment[] = [];
  selectedLine;
  

  constructor(private cart: CartService,
            private router: Router,
            private location: Location,
            private customerService: CustomerService) { }

  ngOnInit(): void {
    this.invoice = this.cart.selectedInvoice;
    
    let customers = this.invoice.customers;
    if (customers.length !==0 ){
       this.customer = customers[0]
    }
    else{
      this.customer = this.customerService.selectedCustomer;
      //this.invoice.customers.push(this.customer)
      //this.cart.selectedInvoice.push(this.customer);
    }
    

  }

  addCustomer(){
    this.router.navigate(['/customers']);
  }

  addPaymentLine(type){
    let line = {
      type: type,
      due: this.invoice.paymentAmount,
      tendered: 0
    }
    this.payment.push(line);
    this.selectedLine = line;
    console.log(this.payment)
  }

  removePaymentLine(line){
    this.payment.slice(line,1);
  }

  selectLine(line){
    this.selectedLine = line;
  }

  goBack(){
    this.location.back();
  }

  validate(){}

  ngAfterContentChecked(){
    // let customers = this.cart.selectedInvoice.customers;
    // this.customer = customers[0];
  }

}
