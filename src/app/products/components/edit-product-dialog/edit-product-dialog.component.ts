import { ChangeDetectionStrategy, Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-edit-product-dialog',
  standalone: true,
  imports: [],
  templateUrl: './edit-product-dialog.component.html',
  styleUrl: './edit-product-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProductDialogComponent {
  public isConfirm: OutputEmitterRef<boolean> = output<boolean>();
  public product: InputSignal<Product | undefined> = input<Product>();

  public confirmEditProduct(): void {
    this.isConfirm.emit(true);
  }

  public back(): void {
    this.isConfirm.emit(false);
  }
}
