import { Injectable, Signal, WritableSignal, computed, signal } from "@angular/core";

@Injectable({ providedIn: "root" })
export default class AuthAlertService {
  private readonly _isOpen: WritableSignal<boolean> = signal<boolean>(false);
  private readonly _message: WritableSignal<string | undefined> = signal<string | undefined>(undefined);
  private readonly _timer: WritableSignal<number> = signal<number>(0);
  private readonly _isMouseEnter: WritableSignal<boolean> = signal<boolean>(false);
  private readonly _duration: Signal<number> = computed<number>(() => 10);
  private readonly _stackMessageCount: Signal<number> = signal<number>(0);

  public get getMessage(): WritableSignal<string | undefined> {
    return this._message;
  }

  public get getDuration(): Signal<number> {
    return this._duration;
  }

  public set setIsMouseEnter(state: boolean) {
    this._isMouseEnter.update(() => state);
  }

  public get getIsOpen(): WritableSignal<boolean> {
    return this._isOpen;
  }

  public get getTimer(): WritableSignal<number> {
    return this._timer;
  }

  public closeAlert(): void {
    this._isOpen.update((state) => !state);
    this._timer.set(0);
    this._isMouseEnter.set(false);
    this._message.set("");
  }

  public showAlert(message: string): void {
    this._isOpen.update((state) => !state);
    this._message.update(() => message);

    const interval = setInterval(() => {
      if (this._isMouseEnter()) return;

      if (!this._isOpen()) return clearInterval(interval);

      if (this._timer() != this._duration()) return this._timer.update((tm) => tm + 1);

      this._isOpen.update((state) => !state);
      this._message.update(() => undefined);
      this._timer.update(() => 0);
      clearInterval(interval);
    }, 1000);
  }
}
