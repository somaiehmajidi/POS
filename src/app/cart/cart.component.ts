import { Component, OnInit } from '@angular/core';
import { Order } from '../interfaces/Order';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orders: Order[] = [];
  total: number = 0;
  selectedItem: any;
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
   this.dataService.getOrders()
   .subscribe(orders =>{
      this.orders = orders;
   });
   //this.selectedItem = this.orders.slice(-1)[0];
   
  }

  ngAfterContentChecked(){
    this.total = this.orders.reduce(function(prev, cur){
       return prev+cur.totalPrice;
      }, 0);
  }

  onSelect(order: Order): void{
    this.selectedItem = order;
  }

}
