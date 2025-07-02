import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-auth-alert",
  imports: [],
  template: `<p>auth-alert works!</p>`,
  styleUrl: "./auth-alert.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthAlertComponent {}
