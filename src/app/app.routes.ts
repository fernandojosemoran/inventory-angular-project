import { Routes } from "@angular/router";
import { AuthGuard } from "./auth/guards/auth.guard";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "auth/login",
  },
  {
    path: "dashboard",
    loadChildren: (): any => import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
    canActivate: [AuthGuard],
    canMatch: [AuthGuard],
  },
  {
    path: "auth",
    loadChildren: (): any => import("./auth/auth.module").then((m) => m.AuthModule),
  },
];
