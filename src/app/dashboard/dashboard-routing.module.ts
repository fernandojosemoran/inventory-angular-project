import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardPageLayoutComponent } from "./pages/dashboard-page-layout/dashboard-page-layout.component";
import { DashBoardComponent } from "./pages/dashboard-page/dashboard-page.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardPageLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
      },
      {
        path: "home",
        component: DashBoardComponent,
        title: "SIM | Dashboard",
      },
      {
        path: "categories",
        loadChildren: () => import("../categories/categories.module").then(m => m.CategoriesModule),
        title: "SIM | Categories"
      },
      {
        path: "products",
        loadChildren: () => import("../products/products.module").then(m => m.ProductsModule),
        title: "SIM | Products"
      },
      {
        path: "purchases",
        loadChildren: () => import("../purchases/purchases.module").then(m => m.PurchasesModule),
        title: "SIM | Purchases"
      },
      {
        path: "reports",
        loadChildren: () => import("../reports/reports.module").then(m => m.ReportsModule),
        title: "SIM | Reports"
      },
      {
        path: "sales",
        loadChildren: () => import("../sales/sales.module").then(m => m.SalesModule),
        title: "SIM | Sales"
      },
      {
        path: "shopping-cart",
        loadChildren: () => import("../cart/cart.module").then(m => m.CartModule),
        title: "SIM | Shopping Cart"
      },
      {
        path: "users",
        loadChildren: () => import("../user/user.module").then(m => m.UserModule),
        title: "SIM | Users"
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DashboardRoutingModule {}
