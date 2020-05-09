import { Injectable } from '@angular/core';  
import { Observable, of } from 'rxjs';

import { Product } from '../Product';
import { PRODUCTS } from '../mock.products';
import { Order } from '../interfaces/Order';

@Injectable({
    providedIn: 'root'  
})

export class DataService {

    products: Product[] = [];
    orders: Order[] = [];
    //orders: Array<{name, price, totalPrice, unit}> = [];

    public getProducts(): Observable<Product[]>{
        this.products = PRODUCTS;
        return of (this.products);
    }

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
    public getOrders(): Observable<Order[]>{
        return of (this.orders);
    }

}