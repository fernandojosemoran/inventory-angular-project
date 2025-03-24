import { Product } from './../../interfaces/product.interface';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ActionsBarComponent } from "../../../shared/components/actions-bar/actions-bar.component";
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-page-layout',
  standalone: true,
  imports: [ ActionsBarComponent, CommonModule ],
  templateUrl: './product-page-layout.component.html',
  styleUrl: './product-page-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPageLayoutComponent implements OnInit {

  public productService: ProductService = inject(ProductService);

  public productList: WritableSignal<Product[]> = signal<Product[]>([]);

  public ngOnInit(): void {
    this.productService.getAllProducts()
    .subscribe(response => this.productList.set(response));
  }
}
