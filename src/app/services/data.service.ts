import { Injectable } from '@angular/core';  
import { Observable, of } from 'rxjs';

import { Product } from '../interfaces/Product';
import { PRODUCTS } from '../mock.products';
import { Key } from '../interfaces/Key';

@Injectable({
    providedIn: 'root'  
})

export class DataService {

    products: Product[] = [];
    categories: string[] = [];

    public getProducts(): Observable<Product[]>{
        //this.products = PRODUCTS;
        //return of (this.products);
        return of (PRODUCTS)
    }

    public getCategories():Observable<string[]>{
        for (var i=0; i < this.products.length; i++){
            let cat = this.products[i].category;
            if(!this.categories.includes(cat)){
              //this.categories.push(cat);
              this.categories = [...this.categories,cat];
            }
          }
        return of (this.categories);
    }

    searchProducts(searchTerm: string){
        var matchingProducts = PRODUCTS.filter(product => 
            product.category.indexOf(searchTerm) > -1);
            console.log(matchingProducts);
            this.products = matchingProducts;
            return matchingProducts;
    }

    createQuickKey(title: string, item: string[]){
        const key: Key = {title: title, items: item};
        //this.categories = [...this.categories,key.title];
        this.categories.push(key.title)
        console.log(this.categories);
    }

    // getCategories(): Observable<string[]>{
    //     console.log(this.categories);
    //     return of (this.categories)
    // }

}