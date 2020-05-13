import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories;
  searchTerm: string = "";
  foundProducts: Product[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.categories = this.dataService.getCategories();
  }

  searchProducts(searchTerm: string){
    this.foundProducts = this.dataService.searchProducts(searchTerm)
  }

}
