import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-factor',
  templateUrl: './factor.component.html',
  styleUrls: ['./factor.component.css']
})
export class FactorComponent implements OnInit {

  factor: any;
  date = new Date();

  numberOfOrders;

  constructor(private cart: CartService,
    private router: Router) { }

  ngOnInit(): void {
    this.factor = this.cart.factor;
    this.numberOfOrders  = this.factor.orders.length
  }

  print(){
    window.print();
  }

  nextInvoice(id){
    this.cart.removeInvoiceById(id);
    this.cart.addInvoice();
    this.router.navigate(['/main'])
  }
}
