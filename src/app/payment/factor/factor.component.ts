import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/cart.service';

@Component({
  selector: 'app-factor',
  templateUrl: './factor.component.html',
  styleUrls: ['./factor.component.css']
})
export class FactorComponent implements OnInit {

  factor: any;
  date = new Date();

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.factor = this.cart.factor;
  }

}
