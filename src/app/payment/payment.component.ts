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
    let id:number = 0;
    if (this.payment.length === 0){
      id = 1
    }
    else{
      id = this.payment[this.payment.length -1].id + 1;
    }
    let line = {
      id: id,
      type: type,
      due: this.invoice.paymentAmount,
      tendered: 0,
      change: 0
    }
    this.payment.push(line);
    this.selectedLine = line;
  }

  removePaymentLine(line){
    let index = this.payment.map(x => {
      return x.id;
    }).indexOf(line.id)
    
    this.payment.splice(index,1);
    this.selectedLine = this.payment[this.payment.length -1]
  }

  selectLine(line){
    this.selectedLine = line;
  }

  goBack(){
    this.location.back();
  }

  validate(){}

  ngAfterContentChecked(){
    if(this.selectedLine){
      this.selectedLine.change = this.selectedLine.tendered - this.selectedLine.due;
    }
    
  }

}
