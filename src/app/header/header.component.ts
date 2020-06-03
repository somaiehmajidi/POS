import { Component, OnInit } from '@angular/core';
import { Invoice } from '../shared/invoice.model';
import { CartService } from '../shared/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  invoices: Invoice[] = this.cart.invoices;
  selectedInvoice;
  
  constructor(private cart: CartService) { }

  ngOnInit(): void {
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
    this.selectedInvoice = this.cart.selectedInvoice;
  }

  removeSession(selectedInvoice){
    this.cart.removeInvoice(selectedInvoice);
    this.selectedInvoice = this.cart.selectedInvoice;
  }

  onClick(invoice){
    this.selectedInvoice = invoice;
    this.cart.selectedInvoice = invoice;
  }
}
