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
     
   

}
