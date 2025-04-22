/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, input, InputSignal, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type InputTypes = "text" | "file" | "email" | "password" ;

@Component({
  selector: 'app-input-with-label',
  standalone: true,
  imports: [ CommonModule ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputWithLabelComponent),
      multi: true
    }
  ],
  templateUrl: './input-with-label.component.html',
  styleUrl: './input-with-label.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputWithLabelComponent implements ControlValueAccessor, OnInit {
  public placeholder: InputSignal<string> = input<string>("Placeholder Unknown");
  public defaultValue: InputSignal<string | number | boolean> = input<string | number | boolean>("Value Unknown");
  public type: InputSignal<InputTypes> = input<InputTypes>("text");
  public for: InputSignal<string> = input<string>("For Unknown");

  public ngOnInit(): void {
    this.value = this.defaultValue();
  }

  public value: any = '';
  public disable: any = false;
  public onChange: any = () => {};
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
    const evt: HTMLInputElement = (event.target as HTMLInputElement);
    this.value = evt.value;
    this.onChange(evt.value);
  };
}
