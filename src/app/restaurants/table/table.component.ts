import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RenameTableComponent } from '../rename-table/rename-table.component';
import { GuestTableComponent } from '../guest-table/guest-table.component';
import { Router } from '@angular/router';

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
  isCircle = false;

  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(table){
    this.selectedTable = table;
  }

  drop(event){
    console.log(event)
  }

  onBook(table){
    this.router.navigate(['/main']); 
    return table;
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

  manageGuests(){
    let table = this.tables[this.tables.indexOf(this.selectedTable)]
    const dialogRef = this.dialog.open(GuestTableComponent,{
      width: '35%',
      data: table.guest
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.tables.find(x=> x.id === table.id).guest = result;
      }
    });
  }

  renameTable(){
    let table = this.tables[this.tables.indexOf(this.selectedTable)]
    const dialogRef = this.dialog.open(RenameTableComponent,{
      width: '35%',
      data: table.value
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.tables.find(x=> x.id === table.id).value = result;
      }
    });
  }

  reshapeTable(){
    this.isCircle = !this.isCircle;
  }

}
