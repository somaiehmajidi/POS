import { Component, OnInit } from '@angular/core';
import { Invoice } from '../shared/invoice.model';
import { Factor, Payment } from '../shared/factor.model';
import { CartService } from '../shared/cart.service';
import { CustomerService } from '../shared/customer.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';


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
            private customerService: CustomerService,
            private notify: NotificationService) { }

  ngOnInit(): void {
    this.invoice = this.cart.selectedInvoice;
    console.log(this.invoice);
    
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
    this.isReadOnly = false;
    let id:number = 0;
    let due = 0;
    let tendered = 0;
    let change = 0;
    if (this.payment.length === 0){
      id = 1;
      due = this.invoice.paymentAmount;
    }
    else{
      id = this.payment[this.payment.length -1].id + 1;
      if (this.payment[this.payment.length -1].change < 0){
        due = Math.abs(this.payment[this.payment.length -1].change);
      }
      
    }
    let line = {
      id: id,
      type: type,
      due: due,
      tendered: tendered,
      change: change
    }
    switch(type){
      case 'نقد':
        this.isReadOnly = false;
        break
      case 'کارت':
        line.tendered = line.due;
        line.change = 0;
        this.isReadOnly = true;
        break
      case 'کارت هدیه':
        break
      case 'چک':
        break
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
      this.router.navigate(["/factor"])
    }

  }

  sendEmail(customer){
    if(customer){
      this.notify.showSuccess("ایمیل ارسال شد!","Done");
      this.emailSent = true;
    }
    else{
      this.notify.showWarning("مشتری انتخاب نشده!","Alert")
    }
  }

  sendMsg(customer){
    if(customer){
      this.notify.showSuccess("پیامک ارسال شد!","Done");
      this.msgSent = true;
    }
    else{
      this.notify.showWarning("مشتری انتخاب نشده!","Alert")
    }
  }

  ngAfterContentChecked(){
    if(this.selectedLine){
      this.selectedLine.change = this.selectedLine.tendered - this.selectedLine.due;
    }
    this.customer = this.customerService.selectedCustomer;
  }

}
