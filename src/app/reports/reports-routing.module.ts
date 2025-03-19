import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReportPageLayoutComponent } from './pages/report-page-layout/report-page-layout.component';

export const routes: Routes = [
  {
    path: "",
    component: ReportPageLayoutComponent,
    title: "Inventory | Reports",
    children: []
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ReportsRoutingModule { }
