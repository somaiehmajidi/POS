import { Injectable } from '@angular/core';
import { Customer } from '../shared/invoice.model';

@Injectable({
    providedIn: 'root'  
})

export class CustomerService {

    customers: Customer[] = [];
    selectedCustomer: Customer;

    getCustomers(){
        return CUSTOMERS
    }

    getCustomer(id: number): Customer{
        return CUSTOMERS.find(x => x.id === id)
    }

    selectCustomer(customer){
        this.selectCustomer = customer;
    }

    addCustomer(
        newCustomer:{id: number, name: string, phone: string, add?:{state,city,street}}
    ){
        CUSTOMERS.push(newCustomer)
    }

    setCustomer(customer){
        this.selectedCustomer = customer;
    }

    editCustomer(customer){
        const result = CUSTOMERS.find(user => user.name === customer.name)
        let index = CUSTOMERS.indexOf(result);
    
        customer.id = CUSTOMERS[index].id;
        CUSTOMERS[index] = customer;
    }

}

const CUSTOMERS:Customer[] = [
    {
        id: 1,
        name: 'سهیل حسن خانی',
        phone: '0912202224',
        add: {
            state: 'تهران',
            city: 'تهران',
            street: 'سعادت آباد'
        }
    },
    {
        id: 2,
        name: 'ندا مجیدی',
        phone: '0912303334',
        add: {
            state: 'تهران',
            city: 'تهران',
            street: 'جلفا'
        }
    },
    {
        id: 3,
        name: 'سمیه مجیدی',
        phone: '0912404445',
        add: {
            state: 'تهران',
            city: 'تهران',
            street: 'نوبنیاد'
        }
    },
    {
        id: 1,
        name: 'سهیل حسن خانی',
        phone: '0912202224',
        add: {
            state: 'تهران',
            city: 'تهران',
            street: 'سعادت آباد'
        }
    },
    {
        id: 2,
        name: 'ندا مجیدی',
        phone: '0912303334',
        add: {
            state: 'تهران',
            city: 'تهران',
            street: 'جلفا'
        }
    }
]