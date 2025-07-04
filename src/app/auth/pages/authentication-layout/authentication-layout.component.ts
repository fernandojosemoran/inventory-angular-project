import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AuthAlertComponent } from "../../components/auth-alert-component/auth-alert.component";
import AuthAlertService from "../../services/auth-alert.service";

@Component({
  selector: "app-authentication-layout",
  imports: [RouterOutlet, AuthAlertComponent, CommonModule],
  template: `
    <router-outlet />
    <app-auth-alert *ngIf="isOpenAlert()"/>
  `,
  styleUrl: "./authentication-layout.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticationLayoutComponent {
  private readonly _authAlertService: AuthAlertService = inject(AuthAlertService);

  public isOpenAlert(): boolean {
    return this._authAlertService.getIsOpen();
  }
}
