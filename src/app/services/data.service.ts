import { Injectable } from '@angular/core';  
import { Observable, of } from 'rxjs';

import { Product } from '../Product';
import { PRODUCTS } from '../mock.products';
//import { Order } from '../interfaces/Order';

@Injectable({
    providedIn: 'root'  
})

export class DataService {

    products: Product[] = [];
    //orders: Order[] = [];
    //orders: Array<{name, price, totalPrice, unit}> = [];

    public getProducts(): Observable<Product[]>{
        this.products = PRODUCTS;
        return of (this.products);
    }

}