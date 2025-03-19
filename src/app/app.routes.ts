import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    pathMatch: "full",
    title: "Inventory | Dashboard"
  },
  {
    path: "categories",
    loadChildren: () => import("./categories/categories.module").then(m => m.CategoriesModule)
  },
  {
    path: "products",
    loadChildren: () => import("./products/products.module").then(m => m.ProductsModule)
  },
  {
    path: "purchases",
    loadChildren: () => import("./purchases/purchases.module").then(m => m.PurchasesModule)
  },
  {
    path: "reports",
    loadChildren: () => import("./reports/reports.module").then(m => m.ReportsModule)
  },
  {
    path: "sales",
    loadChildren: () => import("./sales/sales.module").then(m => m.SalesModule)
  },
];
