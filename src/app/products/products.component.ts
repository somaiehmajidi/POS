import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Product } from '../interfaces/Product';
import { DataService } from '../services/data.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ DataService ]
})
export class ProductsComponent implements OnInit {

  @ViewChild('searchInput') inputElement : ElementRef;
  products: Product[];

  searchTxt: string = '';

  constructor(private dataService: DataService,
              private cartService: CartService) {}

  ngOnInit(): void {
    this.dataService.getProducts()
    .subscribe( products => {
      this.products = products;
    })
  }

  addToCart(product){
    this.cartService.addToCart(product);
  }

  clearSearch(){
    this.inputElement.nativeElement.value = '';
  }

  addKey(){
    alert('hi')
  }

}
