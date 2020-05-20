import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../shared/invoice.model';
import {CartService } from '../../shared/cart.service';

@Component({
  selector: 'app-edit-cart',
  templateUrl: './edit-cart.component.html',
  styleUrls: ['./edit-cart.component.css']
})
export class EditCartComponent implements OnInit {

  @Input() data: Order;

  oldData: Order = this.data;

  currentNumber = '0';
  operator = null;
  waitForSecondNumber = false;
  operand = null;

  quantity = 0;
  price = 0;
  discount = '0';

  isActive = false; 
  
  constructor(private cart: CartService) {
   }

  ngOnInit(): void {
  }

  public getNumber(v: string){
    this.cart.getNumber(v);
    // if(this.waitForSecondNumber)
    // {
    //   this.currentNumber = v;
    //   this.waitForSecondNumber = false;
    // }else{
    //   this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;
    // }
    // if (this.operator !== null){
    //   if (this.operator === 'qty'){

    //     this.data.unit = Number(this.currentNumber)
    //     this.data.totalPrice = (this.data.unit*this.data.price) 

    //   }else if (this.operator === 'disc'){
        
    //     if (this.currentNumber.length === 1){
    //       this.discount = this.currentNumber
    //       this.data.totalPrice = this.data.totalPrice - (this.data.totalPrice*(Number(this.currentNumber))/100);
    //     }else
    //     {
    //       this.discount = this.currentNumber
    //       this.data.totalPrice = (this.data.unit*this.data.price)
    //       this.data.totalPrice = this.data.totalPrice - (this.data.totalPrice*(Number(this.currentNumber))/100); 
    //     }

    //   }else if (this.operator === 'price'){
    //     let price = Number(this.currentNumber)
    //     this.data.price = price;
    //     this.data.totalPrice = (this.data.unit*this.data.price) 
    //   }
    // }
    // else{
    //   console.log('select an operator')
    // }

  }

  getDecimal(){
    this.cart.getDecimal();
    // if(!this.currentNumber.includes('.')){
    //     this.currentNumber += '.'; 
    // }
  }

  public getOperand(op: string){
    this.cart.getOperand(op)
    switch(op){
      case 'qty':
        this.operator = 'qty'
        this.currentNumber = '0'
        this.isActive = true
        break
      case 'disc':
        this.operator = 'disc'
        this.currentNumber = '0'
        break
      case 'price':
        this.operator = 'price'
        this.currentNumber = '0'
        break
    }
  }


  public clear(){
    this.currentNumber = '0';
    this.operator = null;
    this.waitForSecondNumber = false;
  }

  public remove(){
    this.cart.onRemove(this.data);
  }


}
