import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { Invoice, Order, Customer } from '../shared/invoice.model';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orders: Order[] = [];
  invoices: Invoice[] = []
  total: number = 0;
  customer: Customer;

  selectedInvoice;
  selectedOrder;
  
  constructor(private cartService: CartService,
              private router: Router,
              private notify: NotificationService) { }

  ngOnInit(){
    this.invoices = this.cartService.invoices;
    this.selectedInvoice = this.cartService.selectedInvoice;
    this.selectedOrder = this.cartService.selectedOrder;

    this.customer = this.selectedInvoice.customers[0];
  }

  onSelect(order: Order): void{
    this.cartService.onSelect(order);
  }

  addCustomer(){
    this.router.navigate(['/customers']);
  }

  
  ngAfterContentChecked(){
    // this.total = this.orders.reduce(function(prev, cur){
    //    return prev+cur.totalPrice;
    //   }, 0);
    this.selectedInvoice = this.cartService.selectedInvoice;
    this.selectedOrder = this.cartService.selectedOrder;
    this.customer = this.selectedInvoice.customers[0];
  }

  pay(){
    if(this.selectedInvoice.orders.length === 0 ){
      this.notify.showError("سبد خرید خالی است!","خطا")
    }
    else{
      this.router.navigate(['payment']);
    }
  }

}
