import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-authentication-layout",
  imports: [RouterOutlet],
  template: `
    <router-outlet />
  `,
  styleUrl: "./authentication-layout.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticationLayoutComponent {}
