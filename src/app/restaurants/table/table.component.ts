import { Component, OnInit } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tables = [
    {id:1, value: 'T1', disabled: false, guest: 4}, 
    {id:2, value: 'T2', disabled: false, guest: 4}, 
    {id:3, value: 'T3', disabled: true, guest: 4}, 
    {id:4, value: 'T4', disabled: false, guest: 4}, 
    {id:5, value: 'T5', disabled: false, guest: 4}, 
    {id:6, value: 'T6', disabled: false, guest: 4}, 
    {id:7, value: 'T7', disabled: false, guest: 4}, 
    {id:8, value: 'T8', disabled: false, guest: 4} 
  ]

  selectedTable;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(table){
    this.selectedTable = table;
  }

  drop(event){
    console.log(event)
  }

  onBook(table){
    alert(table.value)
  }

  // Edit tables
  addTable(){
    let id = 1;
    if (this.tables.length === 0){
      id = 1;
    }
    else {
      id = this.tables[this.tables.length-1].id + 1;
    }
    let table = {id: id, value: 'T'+id, disabled: false, guest: 4}
    this.tables.push(table)
  }

  removeTable(){
    let index = this.tables.indexOf(this.selectedTable);
    if (index > -1 ){
      this.tables.splice(index,1)
    }
  }

  manageGuests(){}

  renameTable(){
    let index = this.tables.indexOf(this.selectedTable);
    console.log(index)
  }

}
