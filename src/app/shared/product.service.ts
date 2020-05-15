import { Injectable } from '@angular/core';
import { Product, Category } from './product.model';

@Injectable(
    //{
    //providedIn: 'root'  
    //}
)

export class ProductService {

    getCategories(){
        return CATEGORIES;
    }

    getCategoy(id: number):Category {
        return CATEGORIES.find(category => category.id === id )
    }

    addCategory(id: number, name: string, products: Product[]){
        let category = {id, name, products};
        CATEGORIES.push(category);
    }

    getProducts(){
        let products = [];
        CATEGORIES.forEach(function (element){
            products = products.concat(element.products);
        })
        return products;
    }

    createQuickKey(title: string, items:any[]){
        let id = CATEGORIES.length;
        id ++;
        this.addCategory(id, title, items)
        //console.log(CATEGORIES);
    }

}

const CATEGORIES:Category[] = [
    {
        id: 1,
        name: 'پاستا',
        products:[
            {
                id: 1, 
                name: 'پاستا کاپوناتا', 
                price: 30000, 
                unit: 5, 
                imageUrl: '/assets/images/caponata-pasta.jpg'
            },
            {
                id: 2, 
                name: 'فتوچینی آلفردو', 
                price: 34000, 
                unit: 5, 
                imageUrl: '/assets/images/fettucine-alfredo.jpg'
            },
            {
                id: 3, 
                name: 'پاستا قارچ', 
                price: 40000, 
                unit: 5, 
                imageUrl: '/assets/images/mushroom-pasta.jpg'
            }
        ]
    },
    {
        id: 2,
        name: 'پیتزا',
        products:[ 
            {
                id: 4, 
                name: 'پیتزای رنگین کمانی', 
                price: 50000, 
                unit: 5, 
                imageUrl: '/assets/images/rainbow-pizza.jpg'
            },
            {
                id: 5, 
                name: 'پیتزای سیب زمینی و سبزیجات', 
                price: 24000, 
                unit: 5, 
                imageUrl: '/assets/images/potato-pizza.jpg'
            }
        ]
    },
    {
        id: 3,
        name: 'سوپ',
        products:[
            {
                id: 6, 
                name: 'سوپ کدو', 
                price: 18500, 
                unit: 5, 
                imageUrl: '/assets/images/pumpkin-soup.jpg'
            },
            {
                id: 7, 
                name: 'سوپ مرغ', 
                price: 20000, 
                unit: 5, 
                imageUrl: '/assets/images/chicken-soup.jpg'
            }
        ]
    },
    {
        id: 4,
        name: 'سالاد',
        products:[
            {
                id: 8, 
                name: 'سالاد سزار', 
                price: 28000, 
                unit: 5, 
                imageUrl: '/assets/images/caesar-salad.jpg'
            },
            {
                id: 9, 
                name: 'سالاد سیب زمینی', 
                price: 18000, 
                unit: 5, 
                imageUrl: '/assets/images/potato-salad.jpg'
            },
            {
                id: 10, 
                name: 'سالاد آواکادو', 
                price: 33000, 
                unit: 5, 
                imageUrl: '/assets/images/avocado-salad.jpg'
            }
        ]
    }

]