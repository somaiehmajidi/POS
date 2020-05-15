import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { Order } from '../interfaces/Order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orders: Order[] = [];
  total: number = 0;
  selectedItem: any;
  
  constructor(private cartService: CartService) { }

  ngOnInit(){ 
    this.orders = this.cartService.orders;
  }

  //this.selectedItem = this.orders.slice(-1)[0];
   
  ngAfterContentChecked(){
    this.total = this.orders.reduce(function(prev, cur){
       return prev+cur.totalPrice;
      }, 0);
  }

  onSelect(order: Order): void{
  this.selectedItem = order;
  }

}
