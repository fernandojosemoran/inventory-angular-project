import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, WritableSignal, inject, signal } from "@angular/core";
import { CircleExclamationIconComponent } from "../../../shared/components/icons/circle-exclamation-icon/circle-exclamation-icon.component";
import { XMarkComponent } from "../../../shared/components/icons/x-mark-icon/x-mark-icon.component";
import AuthAlertService from "../../services/auth-alert.service";

@Component({
  selector: "app-auth-alert",
  imports: [CircleExclamationIconComponent, XMarkComponent, CommonModule],
  template: `
    <div
      class="auth-alert"
      [ngClass]="{
        'ease-in-animation': !isclosingAlert(),
        'ease-out-animation': isclosingAlert()
      }"
      (mouseenter)="mouseEnter()"
      (mouseleave)="mouseLeave()"
    >
      <div class="icon__container">
        <app-x-mark-icon
          class="xmark__icon"
          fill="#eee"
          height="20"
          width="20"
          (evtClick)="closeAlert()"
        />
      </div>

      <div class="auth-alert__body">
        <app-circle-exclamation-icon
          fill="#ffb2b4"
          height="20"
          width="20"
        />
        <p class="auth-alert__message">{{ showMessage() }}</p>
      </div>
      <span
        class="auth-alert__loader"
        [style.width.%]="getTimerForCloseGlobalAlert() * getDuration()"
      >
      </span>
    </div>
  `,
  styleUrl: "./auth-alert.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthAlertComponent {
  private readonly _authAlertService: AuthAlertService = inject(AuthAlertService);

  public getTimerForCloseGlobalAlert(): number {
    return Math.floor(this._authAlertService.getTimer());
  }

  public isclosingAlert: WritableSignal<boolean> = signal<boolean>(false);

  public showMessage(): string | undefined {
    return this._authAlertService.getMessage();
  }

  public mouseEnter(): void {
    console.info("mouseEnter");
    this._authAlertService.setIsMouseEnter = true;
  }

  public getDuration(): number {
    return this._authAlertService.getDuration();
  }

  public mouseLeave(): void {
    this._authAlertService.setIsMouseEnter = false;
  }

  public closeAlert(): void {
    this.isclosingAlert.update((state) => !state);
    setTimeout(() => this._authAlertService.closeAlert(), 200);
  }
}
