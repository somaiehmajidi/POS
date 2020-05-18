import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "main"},
  {path: "main", component: MainComponent},
  {path: "customers", component: CustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
