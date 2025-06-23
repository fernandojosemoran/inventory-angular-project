import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, WritableSignal, inject, signal } from "@angular/core";
import { XMarkComponent } from "../icons/x-mark-icon/x-mark-icon.component";

import GlobalAlertProvider from "../../provider/global-alert.provider.service";
import { CircleExclamationIconComponent } from "../icons/circle-exclamation-icon/circle-exclamation-icon.component";

@Component({
  selector: "app-gloabal-alert",
  imports: [XMarkComponent, CommonModule, CircleExclamationIconComponent],
  template: `
    <div
      class="global-alert"
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

      <div class="global-alert__body">
        <app-circle-exclamation-icon
          fill="#ffb2b4"
          height="20"
          width="20"
        />
        <p class="global-alert__message">{{ showMessage() }}</p>
      </div>
      <span
        class="global-alert__loader"
        [style.width.%]="getTimerForCloseGlobalAlert() * getDuration()"
      >
      </span>
    </div>
  `,
  styleUrl: "./gloabal-alert.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GloabalAlertComponent {
  private readonly _globalAlertProvider: GlobalAlertProvider = inject(GlobalAlertProvider);

  public getTimerForCloseGlobalAlert(): number {
    return Math.floor(this._globalAlertProvider.getTimer());
  }

  public isclosingAlert: WritableSignal<boolean> = signal<boolean>(false);

  public showMessage(): string | undefined {
    return this._globalAlertProvider.getMessage();
  }

  public mouseEnter(): void {
    console.info("mouseEnter");
    this._globalAlertProvider.setIsMouseEnter = true;
  }

  public getDuration(): number {
    return this._globalAlertProvider.getDuration();
  }

  public mouseLeave(): void {
    this._globalAlertProvider.setIsMouseEnter = false;
  }

  public closeAlert(): void {
    this.isclosingAlert.update((state) => !state);
    setTimeout(() => this._globalAlertProvider.closeAlert(), 200);
  }
}
