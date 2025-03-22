import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCardPageLayoutComponent } from './pages/shopping-cart-page-layout/shopping-cart-page-layout.component';

const routes: Routes = [
  {
    path: "",
    component: ShoppingCardPageLayoutComponent,
    title: "SIM | Shopping Cart"
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ShoppingCartRoutingModule {}
