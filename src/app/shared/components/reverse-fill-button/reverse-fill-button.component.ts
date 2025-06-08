import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  OutputEmitterRef,
  input,
  output,
} from "@angular/core";

type ButtonType = "plane" | "rounded";
type ColorType = "success" | "unsuccess";
type BehaviorType = "submit" | "button" | "reset";

@Component({
  selector: "app-reverse-fill-button",
  standalone: true,
  imports: [CommonModule],
  template: `
    @switch (buttonType()) {
      @case ('plane') {
        <button
          class="reverse-fill-button"
          type="{{ behavior() }}"
          (click)="handlerEvtClick()"
          [ngClass]="{
            'reverse-fill-button--success-color': color() === 'success',
            'reverse-fill-button--unsuccess-color': color() === 'unsuccess'
          }"
        >
          {{ text() }}
        </button>
      }
      @case ('rounded') {
        <button
          class="reverse-fill-button reverse-fill-button--rounded"
          type="{{ behavior() }}"
          (click)="handlerEvtClick()"
          [ngClass]="{
            'reverse-fill-button--success-color': color() === 'success',
            'reverse-fill-button--unsuccess-color': color() === 'unsuccess'
          }"
        >
          {{ text() }}
        </button>
      }
      @default {
        <button
          class="reverse-fill-button"
          type="{{ behavior() }}"
          (click)="handlerEvtClick()"
          [ngClass]="{
            'reverse-fill-button--success-color': color() === 'success',
            'reverse-fill-button--unsuccess-color': color() === 'unsuccess'
          }"
        >
          {{ text() }}
        </button>
      }
    }
  `,
  styles: `
    :host { display: block; }

    .reverse-fill-button {
      background-color: transparent;
      cursor: pointer;
      padding: 0.5em 1em;
    }

    .reverse-fill-button--rounded {
      border-radius: 20px;
    }

    .reverse-fill-button--unsuccess-color {
      border: 1px solid var(--secondary_unsuccess-color);
      color: var(--secondary_unsuccess-color);
    }

    .reverse-fill-button--unsuccess-color:hover {
      background-color: var(--secondary_unsuccess-color);
      color: var(--primary-unsuccess-color);
    }

    .reverse-fill-button--success-color {
      border: 1px solid var(--secondary_success-color);
      color: var(--secondary_success-color);
    }

    .reverse-fill-button--success-color:hover {
      background-color: var(--secondary_success-color);
      color: var(--primary-success-color);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReverseFillButtonComponent {
  public text: InputSignal<string> = input.required<string>();
  public buttonType: InputSignal<ButtonType> = input<ButtonType>("plane");
  public color: InputSignal<ColorType> = input<ColorType>("success");
  public behavior: InputSignal<BehaviorType> = input<BehaviorType>("button");

  public evtClick: OutputEmitterRef<void> = output();

  public handlerEvtClick(): void {
    this.evtClick.emit();
  }
}
