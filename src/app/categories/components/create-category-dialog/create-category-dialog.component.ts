import { handlerFormFieldErrors } from "@/app/shared/utilities/handler-form-field-error";
import { imageValidator } from "@/app/shared/validators/validate-image-type.validator";
import { ChangeDetectionStrategy, Component, InputSignal, OutputEmitterRef, input, output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from "@angular/forms";
import { InputWithLabelComponent } from "../../../shared/components/input-with-label/input-with-label.component";
import { Category } from "../../interfaces/category.interface";

@Component({
  selector: "app-create-category-dialog",
  imports: [ReactiveFormsModule, InputWithLabelComponent],
  templateUrl: "./create-category-dialog.component.html",
  styleUrl: "./create-category-dialog.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCategoryDialogComponent {
  public title: InputSignal<string> = input.required<string>();
  public cancelOperation: OutputEmitterRef<boolean> = output<boolean>();
  public confirmOperation: OutputEmitterRef<Category> = output<Category>();

  private readonly _nameValidators: ValidatorFn[] = [Validators.required, Validators.maxLength(30), Validators.minLength(5)];
  private readonly _descriptionValidators: ValidatorFn[] = [
    Validators.required,
    Validators.maxLength(300),
    Validators.minLength(10),
  ];
  private readonly _imageValidators: ValidatorFn[] = [Validators.required, imageValidator];

  public formGroup: FormGroup = new FormGroup({
    name: new FormControl<string>("", { validators: this._nameValidators }),

    description: new FormControl<string>("", {
      validators: this._descriptionValidators,
    }),

    image: new FormControl<File | null>(null, {
      validators: this._imageValidators,
    }),
  });

  public isValidField(field: string): boolean {
    return !!this.formGroup.controls[field].errors;
  }

  public isPristineField(field: string): boolean {
    return !this.formGroup.controls[field].pristine;
  }

  public handlerFormErrors(field: string): string | null {
    return handlerFormFieldErrors(this.formGroup, { name: field });
  }

  public submit(event: Event): void {
    event.preventDefault();

    if (this.formGroup.invalid) return;

    this.confirmOperation.emit(this.formGroup.value);
  }

  public cancel(): void {
    this.cancelOperation.emit(false);
  }
}
