import { ChangeDetectionStrategy, Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputWithLabelComponent } from "../../../shared/components/input-with-label/input-with-label.component";
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'app-create-category-dialog',
  standalone: true,
  imports: [ ReactiveFormsModule, InputWithLabelComponent ],
  templateUrl: "./create-category-dialog.component.html",
  styleUrl: './create-category-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCategoryDialogComponent {
  public title: InputSignal<string> = input.required<string>();
  public cancelOperation: OutputEmitterRef<boolean> = output<boolean>();
  public confirmOperation: OutputEmitterRef<Category> = output<Category>();

  public formGroup: FormGroup = new FormGroup({
    name: new FormControl<string>("", { validators: [ Validators.required ] }),
    description: new FormControl<string>("", { validators: [ Validators.required ] }),
    image: new FormControl<File | null>(null, { validators: Validators.required }),
  });

  public submit(event: Event) {
    event.preventDefault();

    if (this.formGroup.invalid) return;

    this.confirmOperation.emit(this.formGroup.value);
  }

  public cancel() {
    this.cancelOperation.emit(false);
  }
}
