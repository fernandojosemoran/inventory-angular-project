import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardPageLayoutComponent } from "./pages/dashboard-page-layout/dashboard-page-layout.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardPageLayoutComponent,
    title: "Inventory | Dashboard"
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DashboardRoutingModule {}
