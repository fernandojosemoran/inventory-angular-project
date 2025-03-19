import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PurchasePageLayoutComponent } from './pages/purchase-page-layout/purchase-page-layout.component';

export const routes: Routes = [
  {
    path: "",
    component: PurchasePageLayoutComponent,
    title: "Inventory | Purchases",
    children: []
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PurchasesRoutingModule { }
