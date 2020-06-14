import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { QuickkeyComponent } from './products/quick-key/quick-key.component';
import { CategoriesComponent } from './products/categories/categories.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { QuickKeyModalComponent } from './products/quick-key-modal/quick-key-modal.component';
import { ProductService } from './shared/product.service';

import { FilterPipe } from './products/filter.pipe';
import { SearchPipe } from './shared/search.pipe';
import { EditCartComponent } from './cart/edit-cart/edit-cart.component';
import { CustomersComponent } from './customers/customers.component';
import { PaymentComponent } from './payment/payment.component';
import { MainComponent } from './main/main.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';

import { GoogleMapsModule } from '@angular/google-maps';

import { ToastrModule } from 'ngx-toastr';
import { FactorComponent } from './payment/factor/factor.component';
import { TableComponent } from './restaurants/table/table.component';
import { RenameTableComponent } from './restaurants/rename-table/rename-table.component';
import { GuestTableComponent } from './restaurants/guest-table/guest-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    CartComponent,
    FilterPipe,
    SearchPipe,
    QuickkeyComponent,
    CategoriesComponent,
    QuickKeyModalComponent,
    EditCartComponent,
    CustomersComponent,
    PaymentComponent,
    MainComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    FactorComponent,
    TableComponent,
    RenameTableComponent,
    GuestTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GoogleMapsModule,
    FormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    DragDropModule,
    ToastrModule.forRoot(),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  entryComponents: [QuickKeyModalComponent]
})
export class AppModule { }
