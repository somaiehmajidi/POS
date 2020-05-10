import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ DataService ]
})
export class ProductsComponent implements OnInit {

  products: Product[];

  searchTxt: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProducts()
    .subscribe( products => {
      this.products = products;
    })
  }

  addToCart(product){
    this.dataService.addToCart(product);
  }

}
