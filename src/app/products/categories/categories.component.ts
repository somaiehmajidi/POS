import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../shared/product.service';
//import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Input() data: string[];
  @Output() eventClick = new EventEmitter()
  // searchTerm: string = "";
  // foundProducts: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.dataService.getCategories().subscribe(cats => {
    //   this.categories = cats;
    // });
  }

  // searchProducts(searchTerm: string){
  //   this.foundProducts = this.dataService.searchProducts(searchTerm)
  // }

  filterGroup(category){
    //this.productService.filter(category);
    //alert(category.name);
    this.eventClick.emit(category.name)
    //return category;
  }

}
