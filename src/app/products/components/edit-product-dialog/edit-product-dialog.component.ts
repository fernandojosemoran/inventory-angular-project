import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-edit-product-dialog',
  standalone: true,
  imports: [],
  templateUrl: './edit-product-dialog.component.html',
  styleUrl: './edit-product-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProductDialogComponent { }
