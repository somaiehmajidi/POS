import { Injectable } from '@angular/core';
import { Customer } from '../shared/invoice.model';


@Injectable({
    providedIn: 'root'  
})

export class CustomerService {

    options: google.maps.MapOptions ={ 
        mapTypeId: 'roadmap',
        zoomControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        maxZoom: 15,
        minZoom: 8
    }
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

    addCustomer(newCustomer:Customer){
        CUSTOMERS.push(newCustomer)
    }

    setCustomer(customer){
        this.selectedCustomer = customer;

    }

    editCustomer(customer){
        const result = CUSTOMERS.find(user => user.id === customer.id)
        let index = CUSTOMERS.indexOf(result);
    
        customer.id = CUSTOMERS[index].id;
        CUSTOMERS[index] = customer;
    }

}

const CUSTOMERS:Customer[] = [
    {
        id: 1,
        firstName: 'سهیل',
        lastName: 'حسن خانی',
        phone: '۰۹۳۸۴۴۵۵۶۶۷',
        add: {
            state: 'تهران',
            city: 'تهران',
            street: 'سعادت آباد'
        },
        location: {
            latitude: 35.785731,
            longitude: 51.380563
        }
    },
    {
        id: 2,
        firstName: 'ندا',
        lastName: 'مجیدی',
        phone: '۰۹۱۲۱۲۱۳۱۴۵',
        add: {
            state: 'تهران',
            city: 'تهران',
            street: 'جلفا'
        },
        location: {
            latitude: 35.748860,
            longitude: 51.444041
        }
    },
    {
        id: 3,
        firstName: 'سمیه',
        lastName: 'مجیدی',
        phone: '۰۹۱۲۲۰۲۴۴۵',
        add: {
            state: 'تهران',
            city: 'تهران',
            street: 'نوبنیاد'
        },
        location: {
            latitude: 35.791519,
            longitude: 51.477694
        }
    },
    {
        id: 4,
        firstName: 'سهیل',
        lastName: 'حسن خانی',
        phone: '۰۹۱۲۲۰۲۲۲۴',
        add: {
            state: 'تهران',
            city: 'تهران',
            street: 'سعادت آباد'
        },
        location: {
            latitude: 35.785731,
            longitude: 51.380563
        }
    },
    {
        id: 5,
        firstName: 'ندا',
        lastName: 'مجیدی',
        phone: '۰۹۱۲۳۰۳۳۳۴',
        add: {
            state: 'تهران',
            city: 'تهران',
            street: 'جلفا'
        },
        location: {
            latitude: 35.748860,
            longitude: 51.444041
        }
    }
]