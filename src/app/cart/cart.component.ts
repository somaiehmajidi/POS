import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { Invoice, Order, Customer } from '../shared/invoice.model';
import { Router } from '@angular/router';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orders: Order[] = [];
  invoices: Invoice[] = []
  total: number = 0;
  assignedCustomer: Customer;

  selectedInvoice;
  selectedOrder;
  
  constructor(private cartService: CartService,
              private customerService: CustomerService,
              private router: Router) { }

  ngOnInit(){
    this.invoices = this.cartService.invoices;
    this.selectedInvoice = this.cartService.selectedInvoice;
    this.selectedOrder = this.cartService.selectedOrder;
    
    if (this.customerService.selectedCustomer){
      this.assignedCustomer = this.customerService.selectedCustomer;
      this.selectedInvoice.customers.push(this.assignedCustomer)
    }
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
  }

  pay(){
    this.router.navigate(['payment']);
  }

}
