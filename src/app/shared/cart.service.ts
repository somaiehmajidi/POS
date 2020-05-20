import { Injectable } from '@angular/core';
//import { Order } from '../interfaces/Order';
import { Invoice, Order } from '../shared/invoice.model'
import { isNgTemplate } from '@angular/compiler';

@Injectable({
    providedIn: 'root'  
})

export class CartService {

    invoices: Invoice[] = [];
    orders: Order[] = [];
    selectedItem;

    currentNumber = '0';
    operator = null;
    waitForSecondNumber = false;
    operand = null;

    quantity = 0;
    price = 0;
    discount = '0';

    isActive = false;

    public addToCart(product){
        if (this.invoices){
            let order = this.orders.find(x => x.name === product.name)
            if (order){
                order.unit ++;
                order.totalPrice += order.price;
            }
            else{
                let id = this.orders.length;
                this.orders.push(
                    {oId: id, name: product.name, price: product.price, totalPrice: product.price, unit: 1}
                )
            }
            let sum = this.orders.reduce(function (accumulator, order){
                return accumulator + order.totalPrice
            },0)
            let iId = 1, date = new Date(), amount = sum, paymentAmount = sum, orders = this.orders;
            const invoice = {iId, date, amount, paymentAmount, orders}
            let item = this.invoices.find(x => x.iId === invoice.iId)
            if (item){
                item.amount = sum;
                item.paymentAmount = sum;
            }
            else{
                this.invoices.push(invoice)
            }    
        }
        else{
            alert ('new session')
        }   
    }

    onSelect(order: Order): void{
        this.selectedItem = order;
    }

    onRemove(order: Order):void{
      const index: number = this.orders.indexOf(order);
      if (index !== -1){
        this.orders.splice(index, 1);
      }
    }
     
   //edit cart functions
   public getNumber(v: string){
    const data:any = this.selectedItem;
    if(this.waitForSecondNumber)
    {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    }else{
      this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;
    }
    if (this.operator !== null){
      if (this.operator === 'qty'){

        this.selectedItem.unit = Number(this.currentNumber)
        data.totalPrice = (data.unit*this.selectedItem.price) 

      }else if (this.operator === 'disc'){
        
        if (this.currentNumber.length === 1){
          this.discount = this.currentNumber
          data.totalPrice = data.totalPrice - (data.totalPrice*(Number(this.currentNumber))/100);
          data.discount = this.discount
        }else
        {
          this.discount = this.currentNumber
          data.totalPrice = (data.unit*data.price)
          data.totalPrice = data.totalPrice - (data.totalPrice*(Number(this.currentNumber))/100); 
          data.discount = this.discount
        }

      }else if (this.operator === 'price'){
        let price = Number(this.currentNumber)
        data.price = price;
        data.totalPrice = (data.unit*data.price) 
      }
    }
    else{
      console.log('select an operator')
    }

  }

  getDecimal(){
    if(!this.currentNumber.includes('.')){
        this.currentNumber += '.'; 
    }
  }


  public getOperand(op: string){
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


}
