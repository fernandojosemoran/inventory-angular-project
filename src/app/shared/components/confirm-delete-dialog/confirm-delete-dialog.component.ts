import { Product } from "@/app/products/interfaces/product.interface";
import { AvailablePipe } from "@/app/products/pipes/available.pipe";
import { ChangeDetectionStrategy, Component, InputSignal, OutputEmitterRef, input, output } from "@angular/core";
import { BadgeComponent } from "../badge/badge.component";

@Component({
  selector: "app-confirm-delete-dialog",
  imports: [AvailablePipe, BadgeComponent],
  templateUrl: "./confirm-delete-dialog.component.html",
  styleUrl: "./confirm-delete-dialog.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDeleteDialogComponent {
  public isConfirm: OutputEmitterRef<boolean> = output<boolean>();
  public title: InputSignal<string> = input.required<string>();
  public product: InputSignal<Product> = input.required<Product>();

  public cancel(): void {
    this.isConfirm.emit(false);
  }

  public ConfirmDelete(): void {
    this.isConfirm.emit(true);
  }
}
