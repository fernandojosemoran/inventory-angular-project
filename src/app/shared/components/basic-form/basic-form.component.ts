import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  OnInit,
  OutputEmitterRef,
  input,
  output,
} from "@angular/core";
import {
  HeadersBasicFormValue,
  RowsBasicFormValues,
} from "../../interfaces/basic-form-values.interface";

@Component({
  selector: "app-basic-form",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./basic-form.component.html",
  styleUrl: "./basic-form.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicFormComponent implements OnInit {
  public ngOnInit(): void {
    if (this.headers.length !== this.rows.length)
      console.error("Headers length is different to rows length");
  }

  public headers: InputSignal<HeadersBasicFormValue> =
    input.required<HeadersBasicFormValue>();

  public rows: InputSignal<RowsBasicFormValues<any>> =
    input.required<RowsBasicFormValues<any>>();

  public evtClick: OutputEmitterRef<void> = output();

  public handlerClick(): void {
    this.evtClick.emit();
  }
}
