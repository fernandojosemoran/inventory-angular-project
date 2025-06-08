// edit-product-dialog.component.ts

import { InputWithLabelComponent } from "@/app/shared/components/input-with-label/input-with-label.component";
import { ProductProviderService } from "@/app/shared/provider/product.provider.service";
import { imageValidator } from "@/app/shared/validators/validate-image-type.validator";
import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  OnInit,
  OutputEmitterRef,
  inject,
  input,
  output,
} from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { Product } from "../../interfaces/product.interface";

@Component({
  selector: "app-edit-product-dialog",
  standalone: true,
  imports: [ReactiveFormsModule, InputWithLabelComponent],
  templateUrl: "./edit-product-dialog.component.html",
  styleUrl: "./edit-product-dialog.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProductDialogComponent implements OnInit {
  private readonly _productStateService: ProductProviderService = inject(
    ProductProviderService,
  );

  public isConfirm: OutputEmitterRef<boolean> = output<boolean>();
  public product: InputSignal<Product> = input.required<Product>();

  private nameFieldValidator: { validators: ValidatorFn[] } = {
    validators: [Validators.required],
  };
  private imageFieldValidator: { validators: ValidatorFn[] } = {
    validators: [Validators.required, imageValidator],
  };
  private stockFieldValidator: { validators: ValidatorFn[] } = {
    validators: [Validators.required],
  };
  private costFieldValidator: { validators: ValidatorFn[] } = {
    validators: [Validators.required],
  };
  private priceFieldValidator: { validators: ValidatorFn[] } = {
    validators: [Validators.required],
  };
  private categoryFieldValidator: { validators: ValidatorFn[] } = {
    validators: [Validators.required],
  };
  private availableFieldValidator: { validators: ValidatorFn[] } = {
    validators: [Validators.required],
  };

  public editProductForm: FormGroup = new FormGroup({
    name: new FormControl<string>("", this.nameFieldValidator),
    image: new FormControl<File | null>(null, this.imageFieldValidator),
    stock: new FormControl<number>(0, this.stockFieldValidator),
    cost: new FormControl<number>(0, this.costFieldValidator),
    price: new FormControl<number>(0, this.priceFieldValidator),
    category: new FormControl<string>("", this.categoryFieldValidator),
    available: new FormControl<boolean>(false, this.availableFieldValidator),
  });

  public ngOnInit(): void {
    this.editProductForm.patchValue({
      ...this.product(),
      category: this.product()?.categoryName,
      available: this.product()?.available ? "Si" : "No",
    });
  }

  public handlerOnChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;

    if (!(inputElement.files && inputElement.files.length > 0)) return;

    const file = inputElement.files[0];
    this.editProductForm.get("image")?.setValue(file);
  }

  public submit(event: Event): void {
    event.preventDefault();

    if (this.editProductForm.invalid) return;

    this.createProduct();
  }

  public createProduct(): void {
    const product: Product = this.editProductForm.value;

    this._productStateService.addOneProduct(product);
    this.isConfirm.emit(true);
  }

  public cancel(): void {
    this.isConfirm.emit(false);
  }
}
