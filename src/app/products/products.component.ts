import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
//import { Product } from '../interfaces/Product';
//import { DataService } from '../services/data.service';

import { MatDialog } from '@angular/material/dialog';
import { QuickKeyModalComponent } from './quick-key-modal/quick-key-modal.component';

import { Product, Category } from '../shared/product.model';
import { ProductService } from '../shared/product.service';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  //providers: [ DataService ]
})
export class ProductsComponent implements OnInit {

  @ViewChild('searchInput') inputElement : ElementRef;
  
  products: Product[] = [];
  categories: Category[] = [];

  searchTxt: string = '';
  searchCat: string = '';

  constructor(private productService: ProductService,
              //private dataService: DataService,
              private cartService: CartService,
              public dialog: MatDialog) {}

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
    this.products = this.productService.getProducts();
  }

  addToCart(product){
    this.cartService.addToCart(product);
  }

  clearSearch(){
    this.inputElement.nativeElement.value = '';
  }

  addCategory():void{
    this.dialog.open(QuickKeyModalComponent,{
      width: '50%'
    });
  }
  getCategory(category){
    this.searchCat = category;
  }

}
