import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PurchasePageLayoutComponent } from "./pages/purchase-page-layout/purchase-page-layout.component";

export const routes: Routes = [
  {
    path: "",
    component: PurchasePageLayoutComponent,
    title: "SIM | Purchases",
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchasesRoutingModule {}
