import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [
  
  //all products - main page
  { 
    path: '', component: AllProductsComponent 
  },

  //view product
  {
    path: 'viewproduct/:productId', component:ViewProductsComponent
  },

  //bookings
  {
    path: 'bookings', component:BookingsComponent
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
