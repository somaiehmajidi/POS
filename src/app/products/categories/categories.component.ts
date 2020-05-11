import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.categories = this.dataService.getCategories();
  }

}
