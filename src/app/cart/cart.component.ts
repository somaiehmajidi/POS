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
  //total: number = 0;
  selectedItem: Order;
  assignedCustomer: Customer;
  
  constructor(private cartService: CartService,
              private customerService: CustomerService,
              private router: Router) { }

  ngOnInit(){
    this.invoices = this.cartService.invoices;
    this.orders = this.cartService.orders;
    if (this.customerService.selectedCustomer){
      this.assignedCustomer = this.customerService.selectedCustomer;
    }  
  }

  onSelect(order: Order): void{
    this.selectedItem = order;
  }

  addCustomer(){
    this.router.navigate(['/customers']);
  }

  //this.selectedItem = this.orders.slice(-1)[0];
   
  // ngAfterContentChecked(){
  //   this.total = this.orders.reduce(function(prev, cur){
  //      return prev+cur.totalPrice;
  //     }, 0);
  // }

}
