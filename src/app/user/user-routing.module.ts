import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserPageLayoutComponent } from "./pages/user-page-layout/user-page-layout.component";

const routes: Routes = [
  {
    path: "",
    component: UserPageLayoutComponent,
    title: "SIM | Users",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
