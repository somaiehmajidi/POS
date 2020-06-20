import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/shared/invoice.model';
import { CartService } from 'src/app/shared/cart.service';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/shared/restaurant.service';

@Component({
  selector: 'app-rest-header',
  templateUrl: './rest-header.component.html',
  styleUrls: ['./rest-header.component.css']
})
export class RestHeaderComponent implements OnInit {

  invoices: Invoice[] = this.cart.invoices;
  selectedInvoice;

  selectedTable: any;
  
  constructor(private cart: CartService,
              private router: Router,
              private restService: RestaurantService) { }

  ngOnInit(): void {

    this.restService.tableSubject.subscribe(
      data => {
        this.selectedTable = data;
        //this.invoices.forEach(element => element.table = data.id)
      }
    );

    let invoice: Invoice = { 
      id: 1,
      date: new Date(),
      amount: 0,
      paymentAmount: 0,
      orders: [],
      customers: []
    }
    this.cart.invoices.push(invoice);
    this.cart.selectedInvoice = invoice;
    this.selectedInvoice = this.cart.selectedInvoice;

    
  }

  resetSession(){
    this.invoices = [];
    let invoice: Invoice = { 
      id: 1,
      date: new Date(),
      amount: 0,
      paymentAmount: 0,
      orders: [],
      customers: []
    }
    this.cart.invoices.push(invoice);
    this.cart.selectedInvoice = invoice;
    this.selectedInvoice = this.cart.selectedInvoice;
  }
  
  addSession(){
    this.cart.addInvoice();
    this.router.navigate(['/main']);
    this.selectedInvoice = this.cart.selectedInvoice;
  }

  removeSession(selectedInvoice){
    this.cart.removeInvoice(selectedInvoice);
    this.selectedInvoice = this.cart.selectedInvoice;
    this.router.navigate(['/main']);
  }

  onClick(invoice){
    this.selectedInvoice = invoice;
    this.cart.selectInvoice(invoice);
    this.router.navigate(['/main']);
  }

  setTable(){
    this.invoices = [];
    this.resetSession();
    this.router.navigate(['/table'])
  }

  Back(){
    this.router.navigate(['/table'])
  }

}
