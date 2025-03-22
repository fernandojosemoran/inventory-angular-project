import { RouterModule, Routes } from '@angular/router';
import { CategoryPageLayoutComponent } from './pages/category-page-layout/category-page-layout.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: "",
    component: CategoryPageLayoutComponent,
    title: "SIM | Categories",
    children: []
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CategoriesRoutingModule { }
