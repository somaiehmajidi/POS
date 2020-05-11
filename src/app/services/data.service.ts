import { Injectable } from '@angular/core';  
import { Observable, of } from 'rxjs';

import { Product } from '../interfaces/Product';
import { PRODUCTS } from '../mock.products';

@Injectable({
    providedIn: 'root'  
})

export class DataService {

    products: Product[] = [];
    categories: string[] = [];

    public getProducts(): Observable<Product[]>{
        this.products = PRODUCTS;
        return of (this.products);
    }

    public getCategories(){
        for (var i=0; i < this.products.length; i++){
            let cat = this.products[i].category;
            if(!this.categories.includes(cat)){
              this.categories.push(cat);
            }
          }
        return this.categories;
    }

}