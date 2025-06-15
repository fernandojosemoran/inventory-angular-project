import { InputWithLabelComponent } from "@/app/shared/components/input-with-label/input-with-label.component";
import { handlerFormFieldErrors } from "@/app/shared/utilities/handler-form-field-error";
import { imageValidator } from "@/app/shared/validators/validate-image-type.validator";
import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  OutputEmitterRef,
  WritableSignal,
  input,
  output,
  signal,
} from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from "@angular/forms";

@Component({
  selector: "app-add-product-dialog",
  imports: [InputWithLabelComponent, ReactiveFormsModule],
  templateUrl: "./add-product-dialog.component.html",
  styleUrl: "./add-product-dialog.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductDialogComponent {
  public readonly dialogTitle: InputSignal<string> = input.required<string>();
  public readonly evtCloseCreateNew: OutputEmitterRef<boolean> = output<boolean>();
  public readonly evtConfirmCreateNew: OutputEmitterRef<FormData> = output<FormData>();

  public readonly formNameFieldValidators: ValidatorFn[] = [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(12),
  ];

  public readonly formImageFieldValidators: ValidatorFn[] = [Validators.required, imageValidator];

  public readonly formStockFieldValidators: ValidatorFn[] = [Validators.required, Validators.min(5)];

  public readonly formCostFieldValidators: ValidatorFn[] = [Validators.required, Validators.min(5)];

  public readonly formPriceFieldValidators: ValidatorFn[] = [Validators.required, Validators.min(5)];

  public readonly formCategoryFieldValidators: ValidatorFn[] = [Validators.required];

  public readonly formAvailableFieldValidators: ValidatorFn[] = [Validators.required];

  private readonly _file: WritableSignal<File> = signal<File>({} as File);

  public dialogForm: FormGroup = new FormGroup({
    name: new FormControl<string>("", {
      validators: this.formNameFieldValidators,
    }),
    image: new FormControl<File | null>(null, {
      validators: this.formImageFieldValidators,
    }),
    stock: new FormControl<string>("", {
      validators: this.formStockFieldValidators,
    }),
    cost: new FormControl<string>("", {
      validators: this.formCostFieldValidators,
    }),
    price: new FormControl<string>("", {
      validators: this.formPriceFieldValidators,
    }),
    category: new FormControl<string>("", {
      validators: this.formCategoryFieldValidators,
    }),
    available: new FormControl<string>("", {
      validators: this.formAvailableFieldValidators,
    }),
  });

  public onFileSelected(event: Event): void {
    const files: FileList | null = (event.target as HTMLInputElement).files;

    if (files && files.length > 0) {
      this._file.update(() => files[0]);
      this.dialogForm.get("image")?.markAsDirty();
      this.dialogForm.get("image")?.markAsTouched();
      this.dialogForm.get("image")?.updateValueAndValidity();
    } else {
      this.dialogForm.get("image")?.patchValue(null);
      this.dialogForm.get("image")?.markAsDirty();
      this.dialogForm.get("image")?.markAsTouched();
      this.dialogForm.get("image")?.updateValueAndValidity();
    }
  }

  public isValidImageField(field: string): boolean | undefined {
    if (field === "image") {
      return !!this.dialogForm.get(field)?.errors && (this.dialogForm.get(field)?.touched || this.dialogForm.get(field)?.dirty);
    }
    return !!this.dialogForm.controls[field].errors && this.dialogForm.controls[field].touched;
  }

  public isPristineImageField(field: string): boolean {
    if (field === "image") return !this.dialogForm.get(field)?.pristine;
    return !this.dialogForm.controls[field].pristine;
  }

  public isValidField(field: string): boolean {
    return !!this.dialogForm.controls[field].errors && this.dialogForm.controls[field].touched;
  }

  public isPristineField(field: string): boolean {
    return !this.dialogForm.controls[field].pristine;
  }

  public handlerFormErrors(field: string): string | null {
    return handlerFormFieldErrors(this.dialogForm, { name: field });
  }

  public submit(event: Event): void {
    event.preventDefault();

    if (this.dialogForm.invalid) return this.dialogForm.markAllAsTouched();

    const formData = new FormData();
    formData.append("code", crypto.randomUUID().toString());
    formData.append("name", String(this.dialogForm.get("name")?.value || ""));
    formData.append("categoryId", String(this.dialogForm.get("category")?.value || ""));
    formData.append("file", this._file() || null);
    formData.append("stock", String(this.dialogForm.get("stock")?.value || ""));
    formData.append("cost", String(this.dialogForm.get("cost")?.value || ""));
    formData.append("price", String(this.dialogForm.get("price")?.value || ""));
    formData.append("available", String(this.dialogForm.get("available")?.value || ""));
    formData.append("imageUrl", "");

    this.evtConfirmCreateNew.emit(formData);
    this.evtCloseCreateNew.emit(true);
  }

  public cancel(): void {
    this.evtCloseCreateNew.emit(true);
  }
}
