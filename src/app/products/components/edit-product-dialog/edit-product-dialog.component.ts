import { ChangeDetectionStrategy, Component, inject, input, InputSignal, OnInit, output, OutputEmitterRef } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ProductProviderService } from '@/app/shared/provider/product.provider.service';
import { ProductService } from '../../services/product.service';
import { InputWithLabelComponent } from '@/app/shared/components/input-with-label/input-with-label.component';

@Component({
  selector: 'app-edit-product-dialog',
  standalone: true,
  imports: [ ReactiveFormsModule, InputWithLabelComponent ],
  templateUrl: './edit-product-dialog.component.html',
  styleUrl: './edit-product-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProductDialogComponent implements OnInit {
  private readonly _productStateService: ProductProviderService = inject(ProductProviderService);
  private readonly _productService: ProductService = inject(ProductService);

  public isConfirm: OutputEmitterRef<boolean> = output<boolean>();
  public product: InputSignal<Product | undefined> = input<Product>();

  public ngOnInit(): void {
    this.editProductForm.patchValue({
        ...this.product(),
        category: this.product()?.categoryName,
        available: this.product()?.available ? "Si" : "No"
    });
  }

  public editProductForm: FormGroup = new FormGroup({
    name: new FormControl<string>('', { validators: [ Validators.required ] }),
    image: new FormControl<string>('', { validators: [ Validators.required ] }),
    stock: new FormControl<number>(0, { validators: [ Validators.required ] }),
    cost: new FormControl<number>(0 , { validators: [ Validators.required ] }),
    price: new FormControl<number>(0 , { validators: [ Validators.required ] }),
    category: new FormControl<string>('', { validators: [ Validators.required ] }),
    available: new FormControl<boolean>(false , { validators: [ Validators.required ] }),
  });

  public submit(event: Event): void {
    event.preventDefault();

    if (this.editProductForm.invalid) return;

    this.createProduct();
  }

  public createProduct(): void {
    const product: Product = this.editProductForm.value;

    this._productStateService.addOneProduct(product);
    // this._productService.updateProduct(product);
    this.isConfirm.emit(true);
  }

  public cancel(): void {
    this.isConfirm.emit(false);
  }
}
