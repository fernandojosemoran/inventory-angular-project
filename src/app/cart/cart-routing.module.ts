import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageLayoutComponent } from './pages/cart-page-layout/cart-page-layout.component';

const routes: Routes = [
  {
    path: "",
    component: CartPageLayoutComponent,
    title: "SIM | Shopping Cart"
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CartRoutingModule {}
