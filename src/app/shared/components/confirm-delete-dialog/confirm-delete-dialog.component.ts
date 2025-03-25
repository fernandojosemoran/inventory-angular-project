import { ChangeDetectionStrategy, Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'app-confirm-delete-dialog',
  standalone: true,
  imports: [],
  templateUrl: './confirm-delete-dialog.component.html',
  styleUrl: './confirm-delete-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDeleteDialogComponent {
  public isConfirm: OutputEmitterRef<boolean> = output<boolean>();

  public title: InputSignal<string> = input<string>("Title Unknown");

  public Back(): void {
    this.isConfirm.emit(false);
  }

  public ConfirmDelete(): void {
    this.isConfirm.emit(true);
  }
}
