import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, InputSignal, OnInit, forwardRef, input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

type InputTypes = "text" | "file" | "email" | "password";
type InputShape = "circle" | "normal";

@Component({
  selector: "app-input-with-label",
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputWithLabelComponent),
      multi: true,
    },
  ],
  templateUrl: "./input-with-label.component.html",
  styleUrl: "./input-with-label.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputWithLabelComponent implements ControlValueAccessor, OnInit {
  public placeholder: InputSignal<string> = input.required<string>();
  public defaultValue: InputSignal<string | number | boolean> = input<string | number | boolean>("Value Unknown");
  public type: InputSignal<InputTypes> = input<InputTypes>("text");
  public for: InputSignal<string> = input.required<string>();
  public shape: InputSignal<InputShape> = input<InputShape>("normal");

  public ngOnInit(): void {
    this.value = this.defaultValue();
  }

  public value: any = "";
  public disable: any = false;

  // biome-ignore lint/suspicious/noEmptyBlockStatements: <explanation>
  public onChange: any = () => {};
  // biome-ignore lint/suspicious/noEmptyBlockStatements: <explanation>
  public onTouched: any = () => {};

  public writeValue(value: any): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disable = isDisabled;
  }

  public handlerOnChange(event: Event): void {
    const evt: HTMLInputElement = event.target as HTMLInputElement;
    this.value = evt.value;
    this.onChange(evt.value);
  }
}
