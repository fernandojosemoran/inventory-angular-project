import { Product } from '@/app/products/interfaces/product.interface';
import { AvailablePipe } from '@/app/products/pipes/available.pipe';
import { ChangeDetectionStrategy, Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'app-confirm-delete-dialog',
  standalone: true,
  imports: [ AvailablePipe, BadgeComponent ],
  templateUrl: './confirm-delete-dialog.component.html',
  styleUrl: './confirm-delete-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDeleteDialogComponent {
  public isConfirm: OutputEmitterRef<boolean> = output<boolean>();
  public title: InputSignal<string> = input<string>("Title Unknown");
  public product: InputSignal<Product> = input<Product>({} as Product);

  public cancel(): void {
    this.isConfirm.emit(false);
  }

  public ConfirmDelete(): void {
    this.isConfirm.emit(true);
  }
}
