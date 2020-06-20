import { Injectable } from '@angular/core';
import { Table } from './table.model';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RestaurantService{
    
  public tableSubject = new ReplaySubject<any>(1);

  passTable(data){
    this.tableSubject.next(data);
  }
  

}
