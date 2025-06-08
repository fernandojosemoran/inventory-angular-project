import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SalePageLayoutComponent } from "./pages/sale-page-layout/sale-page-layout.component";

export const routes: Routes = [
  {
    path: "",
    component: SalePageLayoutComponent,
    title: "SIM | Sales",
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule {}
