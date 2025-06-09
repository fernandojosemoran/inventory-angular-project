import { InputWithLabelComponent } from "@/app/shared/components/input-with-label/input-with-label.component";
import { imageValidator } from "@/app/shared/validators/validate-image-type.validator";
import { ChangeDetectionStrategy, Component, InputSignal, OutputEmitterRef, input, output } from "@angular/core";
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

  public readonly formNameFieldValidators: ValidatorFn[] = [Validators.required];

  public readonly formImageFieldValidators: ValidatorFn[] = [Validators.required, imageValidator];

  public readonly formStockFieldValidators: ValidatorFn[] = [Validators.required];

  public readonly formCostFieldValidators: ValidatorFn[] = [Validators.required];

  public readonly formPriceFieldValidators: ValidatorFn[] = [Validators.required];

  public readonly formCategoryFieldValidators: ValidatorFn[] = [Validators.required];

  public readonly formAvailableFieldValidators: ValidatorFn[] = [Validators.required];

  public dialogForm: FormGroup = new FormGroup({
    name: new FormControl<string>("", {
      validators: this.formNameFieldValidators,
    }),
    image: new FormControl<File>({} as File, {
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

  public submit(event: Event): void {
    event.preventDefault();
    if (this.dialogForm.invalid) return;

    this.evtCloseCreateNew.emit(true);
  }

  public cancel(): void {
    this.evtCloseCreateNew.emit(true);
  }
}
