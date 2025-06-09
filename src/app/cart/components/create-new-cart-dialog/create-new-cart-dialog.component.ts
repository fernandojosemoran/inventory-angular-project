import { DropDownSelectedOption } from "@/app/shared/interfaces/dropdown.interface";
import { ProductProviderService } from "@/app/shared/provider/product.provider.service";
import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  OnInit,
  OutputEmitterRef,
  WritableSignal,
  inject,
  input,
  output,
  signal,
} from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from "@angular/forms";
import { DropdownWithSearcherComponent } from "../../../shared/components/dropdown-with-searcher/dropdown-with-searcher.component";
import { InputWithLabelComponent } from "../../../shared/components/input-with-label/input-with-label.component";
import { Cart } from "../../types/cart.api";

@Component({
  selector: "app-create-new-cart-dialog",
  imports: [InputWithLabelComponent, ReactiveFormsModule, DropdownWithSearcherComponent],
  template: `
    <dialog class="add-cart-dialog">
      <h2 class="add-cart-dialog__title">{{ dialogTitle() }}</h2>
      <form
        (submit)="submit($event)"
        [formGroup]="dialogForm"
        class="add-cart-dialog__form"
      >
        <app-dropdown-with-searcher
          title="Selecciona un producto"
          placeholder="Busca un producto"
          toolTip="Selector de producto"
          (evtSearch)="dropDownSelectedOption($event)"
          (evtOptionSelected)="dropdownOptionSelected($event)"
          [optionsList]="productFiltered()"
        />

        <app-input-with-label
          for="quantity-input"
          placeholder="Cantidad"
          formControlName="quantity"
          type="text"
          required
        />
        <app-input-with-label
          for="type-input"
          placeholder="Tipo de producto"
          formControlName="type"
          type="text"
          required
        />
        <app-input-with-label
          for="subtotal-input"
          placeholder="Subtotal"
          formControlName="subtotal"
          type="text"
          required
        />

        <div class="add-cart-dialog__btn-container">
          <button
            type="submit"
            (click)="cancel()"
            class="add-cart-dialog__btn add-cart-dialog__btn--cancel"
          >
            Cancelar
          </button>
          <button
            type="submit"
            (submit)="submit($event)"
            class="add-cart-dialog__btn add-cart-dialog__btn--accept"
          >
            Crear
          </button>
        </div>
      </form>
    </dialog>

  `,
  styleUrl: "./create-new-cart-dialog.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateNewCartDialogComponent implements OnInit {
  public readonly dialogTitle: InputSignal<string> = input.required<string>();
  public readonly evtCloseCreateNew: OutputEmitterRef<boolean> = output<boolean>();
  public readonly evtCreateNewCart: OutputEmitterRef<Cart> = output<Cart>();

  public optionSelected: WritableSignal<DropDownSelectedOption> = signal<DropDownSelectedOption>({} as DropDownSelectedOption);
  public ProductProvider: ProductProviderService = inject(ProductProviderService);

  public products: InputSignal<string[]> = input.required<string[]>();
  public productFiltered: WritableSignal<string[]> = signal<string[]>([]);

  public ngOnInit(): void {
    this.productFiltered.set(this.products());
  }

  public readonly formTypeFieldValidators: ValidatorFn[] = [Validators.required];

  public readonly formQuantityFieldValidators: ValidatorFn[] = [Validators.required];

  public readonly formSubtotalFieldValidators: ValidatorFn[] = [Validators.required];

  public dropdownOptionSelected(opt: DropDownSelectedOption): void {
    this.optionSelected.set(opt);
  }

  public dialogForm: FormGroup = new FormGroup({
    quantity: new FormControl<string>("", {
      validators: this.formQuantityFieldValidators,
    }),
    type: new FormControl<string>("", {
      validators: this.formTypeFieldValidators,
    }),
    subtotal: new FormControl<string>("", {
      validators: this.formSubtotalFieldValidators,
    }),
  });

  public dropDownSelectedOption(term: string): void {
    if (!term.trim()) return this.productFiltered.set(this.products());

    const productFiltered: string[] = this.products().filter((prdName) => prdName.trim().toLowerCase().startsWith(term));
    this.productFiltered.set(productFiltered);
  }

  public submit(event: Event): void {
    event.preventDefault();

    if (this.dialogForm.invalid || !this.optionSelected().name) return;

    this.evtCreateNewCart.emit({
      ...this.dialogForm.value,
      product: this.optionSelected().name,
    } as Cart);
  }

  public cancel(): void {
    this.evtCloseCreateNew.emit(true);
  }
}
