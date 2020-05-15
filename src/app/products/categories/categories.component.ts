import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Input() data: string[];
  @Output() eventClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  filterGroup(category){
    if (category === 'home'){
      this.eventClick.emit('');
    }
    else{
      this.eventClick.emit(category.name);
    }
  }

}
