import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductPageLayoutComponent } from "./pages/product-page-layout/product-page-layout.component";

export const routes: Routes = [
  {
    path: "",
    component: ProductPageLayoutComponent,
    title: "SIM | Products",
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
