import { Injectable } from '@angular/core';
//import { Product } from '../Product';
import { Order } from '../interfaces/Order';

@Injectable({
    providedIn: 'root'  
})

export class CartService {

    orders: Order[] = [];

    public addToCart(product){
        let item = this.orders.find(x => x.name === product.name)
        if(item){
            item.unit ++;
            item.totalPrice += item.price;
        }
        else{        
            this.orders.push(
                {name: product.name,price: product.price, totalPrice: product.price, unit:1 }
            );
        }
    }
   

}