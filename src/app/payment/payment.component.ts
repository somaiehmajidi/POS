import { Component, OnInit } from '@angular/core';
import { Factor, Payment } from '../shared/factor.model';
import { CartService } from '../shared/cart.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';
import { PaymentService } from '../shared/payment.service';

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
  isReadOnly; msgSent; emailSent = false;
  totalChange: number = 0;

  constructor(private cart: CartService,
            private router: Router,
            private location: Location,
            private payService: PaymentService,
            private notify: NotificationService) { }

  ngOnInit(): void {
    this.invoice = this.cart.selectedInvoice; 
    this.payService.invoice = this.cart.selectedInvoice;
    
    let customers = this.invoice.customers;
    if (customers.length !==0 ){
       this.customer = customers[0]
    }

    this.payment = this.payService.payment;
    this.payService.paySubject.subscribe(
      data => {
        this.selectedLine = data;
      }
    );
  }

  onChange(line){
    this.payment[line.id - 1].change = line.tendered - line.due;
  }

  addCustomer(){
    this.router.navigate(['/customers']);
  }

  addPaymentLine(type){
    this.payService.addPayment(type);
  }

  addCash(){
    this.isReadOnly = false;
    let id = this.payment.length; 
    if (id === 0){
      let line: Payment = {
        id: id+1,
        due: this.invoice.paymentAmount,
        tendered: 0,
        change: (this.invoice.paymentAmount-this.invoice.tendered),
        type: 'نقد'
      }
      this.payment.push(line);
      this.selectedLine = line;
    }
    else{
      let line: Payment = {
        id: id+1,
        due: Math.abs(this.payment[this.payment.length -1].change),
        tendered: 0,
        change: (this.invoice.paymentAmount-this.invoice.tendered),
        type: 'نقد'
      }
      this.payment.push(line);
      this.selectedLine = line;
    }
  }

  addCredit(){
    this.isReadOnly = true;
    let id = this.payment.length;
    if (id === 0){
      let line: Payment = {
        id: id+1,
        due: this.invoice.paymentAmount,
        tendered: this.invoice.paymentAmount,
        change: 0,
        type: 'کارت'
      }
      this.payment.push(line);
      this.selectedLine = line;
    }else{
      let line: Payment = {
        id: id+1,
        due: Math.abs(this.payment[this.payment.length -1].change),
        tendered: Math.abs(this.payment[this.payment.length -1].change),
        change: 0,
        type: 'کارت'
      }
      this.payment.push(line);
      this.selectedLine = line;
    }
    
  }

  removePaymentLine(line){
    let index = this.payment.map(x => {
      return x.id;
    }).indexOf(line.id)
    
    this.payment.splice(index,1);
    this.selectedLine = this.payment[this.payment.length -1]
  }

  selectLine(line){
    this.payService.paySubject.next(line)
  }

  goBack(){
    this.location.back();
  }

  validateFactor(){
    if (this.payment.length === 0){
      this.notify.showError("پرداختی ثبت نشده!","Error")
    }
    else{
      for (let i=0; i<this.payment.length; i++){
        if (this.payment[i].change > 0){
          this.totalChange += this.payment[i].change
        } 
      }
      let factor: Factor = {
        id: 1,
        invoiceId: this.invoice.id,
        total: this.invoice.paymentAmount,
        orders: this.invoice.orders,
        paymentLines: this.payment,
        change: this.totalChange
      }
      this.factor.push(factor);
      //test factor..
      this.cart.factor = factor;
      //console.log(this.factor)
      this.payService.payment = [];
      this.router.navigate(["/factor"])
    }
  }

  sendEmail(customer){
    if (this.payment.length === 0){
      this.notify.showError("پرداختی ثبت نشده!","خطا")
    }
    else{
      if(customer){
        this.notify.showSuccess("ایمیل ارسال شد!","Done");
        this.emailSent = true;
      }
      else{
        this.notify.showWarning("مشتری انتخاب نشده!","Alert")
      }
    }
  }

  sendMsg(customer){
    if (this.payment.length === 0){
      this.notify.showError("پرداختی ثبت نشده!","Error")
    }
    else{
      if(customer){
        this.notify.showSuccess("پیامک ارسال شد!","Done");
        this.msgSent = true;
      }
      else{
        this.notify.showWarning("مشتری انتخاب نشده!","Alert")
      }
    } 
  }

  ngAfterContentChecked(){
  }

}
