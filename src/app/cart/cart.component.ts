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

  //date:Date = new Date();

  orders: Order[] = [];
  invoices: Invoice[] = []
  total: number = 0;
  selectedItem: Order;
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
    
    //this.orders = this.cartService.selectedInvoice.orders;
    if (this.customerService.selectedCustomer){
      this.assignedCustomer = this.customerService.selectedCustomer;
    }
  }

  onSelect(order: Order): void{
    //this.selectedItem = order;
    this.cartService.onSelect(order);
    //this.selectedItem = this.cartService.selectedItem;
  }

  addCustomer(){
    this.router.navigate(['/customers']);
  }

  //this.selectedItem = this.orders.slice(-1)[0];
  
  ngAfterContentChecked(){
    // this.total = this.orders.reduce(function(prev, cur){
    //    return prev+cur.totalPrice;
    //   }, 0);
    this.selectedInvoice = this.cartService.selectedInvoice;
    this.selectedOrder = this.cartService.selectedOrder;
  }

}
