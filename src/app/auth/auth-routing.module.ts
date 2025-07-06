import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExcludeAuthModulesGuard } from "./guards/exclude-auth-modules.guard";
import { AuthenticationLayoutComponent } from "./pages/authentication-layout/authentication-layout.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";

const routes: Routes = [
  {
    path: "",
    component: AuthenticationLayoutComponent,
    children: [
      {
        path: "login",
        component: LoginPageComponent,
        title: "Login",
        canMatch: [ExcludeAuthModulesGuard],
        canActivate: [ExcludeAuthModulesGuard],
      },
      {
        path: "register",
        component: RegisterPageComponent,
        title: "Register",
        canMatch: [ExcludeAuthModulesGuard],
        canActivate: [ExcludeAuthModulesGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
