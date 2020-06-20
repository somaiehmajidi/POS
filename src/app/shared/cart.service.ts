import { Injectable } from '@angular/core';
import { Invoice, Order } from './invoice.model';
import { RestaurantService } from './restaurant.service';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'  
})

export class CartService {

    invoices: Invoice[] = [];
    orders: Order[] = [];

    currentNumber = '0';
    operator = 'qty';
    waitForSecondNumber = false;
    operand = null;

    quantity = 0;
    price = 0;
    discount = '0';

    isNegative = false;
    isActive = false;
    selectedInvoice;
    selectedOrder;
    selectedTable;

    public invoiceSubject = new Subject<any>();

    //test factors...
    factor;

    constructor(private restService: RestaurantService){}

    public add(product){
      let invoiceId = this.selectedInvoice.id;
      
      this.orders = this.invoices[invoiceId-1].orders;
      let id = this.orders.length;
      
      let order = this.orders.find(x => x.name === product.name);      
      
      if (order){
        order.unit++;
        order.totalPrice += order.price;
      }
      else{
        let newOrder: Order = {
          id: id++,
          name: product.name,
          price: product.price, 
          totalPrice: product.price,
          unit: 1
        }
        this.orders.push(newOrder)
        this.selectedOrder = newOrder;
      }
      
      let sum = this.orders.reduce(function (accumulator, order){
        return accumulator + order.totalPrice
      },0)
      this.invoices[invoiceId-1].amount = sum;
      this.invoices[invoiceId-1].paymentAmount = sum;
    }

    onSelect(order: Order): void{
        this.selectedOrder = order;
    }

    onRemove(order: Order):void{
      const index: number = this.orders.indexOf(order);
      if (index !== -1){
        if (order.totalPrice === 0){
          this.orders.splice(index, 1);
          let id = this.orders.length;
          this.selectedOrder = this.orders[id-1]
        }
        else{
          order.unit = 0;
          order.totalPrice = 0;
        }
      }
    }
     
   //edit cart functions
    getNumber(v: string){
    const data:any = this.selectedOrder;
    if(this.waitForSecondNumber)
    {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    }
    else{
      this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;
    }
    if (this.operator !== null){
      if (this.operator === 'qty'){

        this.selectedOrder.unit = Number(this.currentNumber)
        data.totalPrice = (data.unit*this.selectedOrder.price) 

      }else if (this.operator === 'disc'){
        
        if (this.currentNumber.length === 1){
          this.discount = this.currentNumber
          data.totalPrice = data.totalPrice - (data.totalPrice*(Number(this.currentNumber))/100);
          data.discount = this.discount
        }else
        {
          if (+this.currentNumber > 100){
            this.discount = '100';
            this.currentNumber = '100'; 
          }
          else {
            this.discount = this.currentNumber
          }
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

  getNegative(){
    this.isNegative = !this.isNegative;
    let op = this.operator;
    if(this.isNegative){
      switch(op){
        case 'qty':
          // this.selectedOrder.unit = -Math.abs(this.selectedOrder.unit) 
          // this.selectedOrder.totalPrice = -Math.abs(this.selectedOrder.totalPrice)         
          break
        case 'disc':
          break
        case 'price':
          break
      }
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

   //Invoice functions
  addInvoice(){
    let id: any;
    if (this.invoices.length === 0){
      id =1 
    }
    else if(this.invoices.length === 1){
      id = 2;
    }
    else{
      id = this.invoices.slice(-1)[0].id
      id++
    }
    let invoice: Invoice = { 
      id: id,
      date: new Date(),
      amount: 0,
      paymentAmount: 0,
      orders: [],
      customers: []
    }
    this.invoices.push(invoice);
    this.selectedInvoice = invoice;
    this.invoiceSubject.next(invoice);
  }

  removeInvoice(invoice){
    const index = this.invoices.indexOf(invoice);
    if(index !== 0){
      this.invoices.splice(index, 1)
    }
    //selected Invoice & selected Order:
    this.selectedInvoice = this.invoices[this.invoices.length-1];
    this.invoiceSubject.next(this.invoices.length-1)
    let array = this.selectedInvoice.orders;
    this.selectedOrder = array[array.length-1];
  }

  removeInvoiceById(id){
    this.invoices[id-1].orders = [];
    this.invoices[id-1].payment = [];
    this.invoices.splice(id-1,1);
    this.invoiceSubject.next(this.invoices.length-1);
  }

  selectInvoice(invoice){
    this.invoiceSubject.next(invoice);
    this.selectedInvoice = invoice;
    if (invoice.orders.lenght !== 0){
      let array = this.selectedInvoice.orders;
      this.selectedOrder = array[array.length-1];
    }
  }

  getInvoice(id:number){
    return this.invoices.find(invoice => invoice.id === id)
  }

  addCustomer(customer){
    let invoiceId = this.selectedInvoice.id;
    let result = this.invoices.find(x => x.id === invoiceId)
    result.customers = [];
    result.customers.push(customer)
  }


}
