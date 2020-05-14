import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Product } from '../interfaces/Product';
import { DataService } from '../services/data.service';
import { CartService } from '../services/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { QuickKeyModalComponent } from './quick-key-modal/quick-key-modal.component';

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

  categories: string[] = [];

  constructor(private dataService: DataService,
              private cartService: CartService,
              public dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataService.getProducts()
      .subscribe( products => {
      this.products = products;
    });
    this.dataService.getCategories()
    .subscribe(cats =>{
      this.categories = cats;
    })
  }

  addToCart(product){
    this.cartService.addToCart(product);
  }

  clearSearch(){
    this.inputElement.nativeElement.value = '';
  }

  addKey():void{
    this.dialog.open(QuickKeyModalComponent,{
      width: '50%'
    });
  }

}
