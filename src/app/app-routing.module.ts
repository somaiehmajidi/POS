import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CustomersComponent } from './customers/customers.component';
import { PaymentComponent } from './payment/payment.component';
import { FactorComponent } from './payment/factor/factor.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "main"},
  {path: "main", component: MainComponent},
  {path: "customers", component: CustomersComponent},
  {path: "payment", component: PaymentComponent},
  {path: "factor", component: FactorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
