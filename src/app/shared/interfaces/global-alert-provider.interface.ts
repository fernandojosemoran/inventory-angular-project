import { WritableSignal } from "@angular/core";

export interface GlobalAlert {
  showAlert(message: string): void;
  get getMessage(): WritableSignal<string | undefined>;
  get getIsOpen(): WritableSignal<boolean>;
}
