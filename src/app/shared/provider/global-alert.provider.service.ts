import { Injectable, WritableSignal, signal } from "@angular/core";
import { GlobalAlert } from "../interfaces/global-alert-provider.interface";

@Injectable({ providedIn: "root" })
export default class GlobalAlertProvider implements GlobalAlert {
  private readonly _isOpen: WritableSignal<boolean> = signal<boolean>(false);
  private readonly _message: WritableSignal<string | undefined> = signal<string | undefined>(undefined);

  public get getIsOpen(): WritableSignal<boolean> {
    return this._isOpen;
  }

  public get getMessage(): WritableSignal<string | undefined> {
    return this._message;
  }

  public showAlert(message: string): void {
    if (this._isOpen()) return;

    this._isOpen.update((state) => !state);
    this._message.update(() => message);

    setTimeout(() => {
      this._isOpen.update((state) => !state);
      this._message.update(() => undefined);
    }, 3000);
  }
}
