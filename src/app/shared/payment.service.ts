import { Injectable } from '@angular/core';
import { Payment, Factor} from './factor.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'  
})

export class PaymentService {

    payment: Payment[] = [];
    invoice: any;
    
    public paySubject= new Subject<any>();

    addPayment(type){
        let id = this.payment.length;
        let pay = {id: id+1, due:0, tendered:0, change:0, type: type};

        if (type === 'نقد'){
            if (id === 0){
                pay.due = this.invoice.paymentAmount;
                pay.change = pay.tendered - pay.due;
            }
            else{
                pay.due = Math.abs(this.payment[this.payment.length -1].change)
                pay.change = pay.tendered - pay.due;
            }
        }
        else if(type === 'کارت'){
            pay.change = 0;
            if (id === 0){
                pay.due = this.invoice.paymentAmount;
                pay.tendered = pay.due
            }
            else{
                pay.due = Math.abs(this.payment[this.payment.length -1].change);
                pay.tendered = pay.due
            }
        }
        
        this.payment.push(pay)
        this.paySubject.next(pay)
    }

    removePayment(){}

    editPayment(){}

}