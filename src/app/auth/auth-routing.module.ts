import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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
      },
      {
        path: "register",
        component: RegisterPageComponent,
        title: "Register",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
