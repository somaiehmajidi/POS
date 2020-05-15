import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { FilterPipe } from './filter.pipe';
import { QuickkeyComponent } from './products/quick-key/quick-key.component';
import { CategoriesComponent } from './products/categories/categories.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { QuickKeyModalComponent } from './products/quick-key-modal/quick-key-modal.component';
import { ProductService } from './shared/product.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    CartComponent,
    FilterPipe,
    QuickkeyComponent,
    CategoriesComponent,
    QuickKeyModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    MatDialogModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  entryComponents: [QuickKeyModalComponent]
})
export class AppModule { }
