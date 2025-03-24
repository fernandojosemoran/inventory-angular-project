import { Product } from './../../interfaces/product.interface';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ActionsBarComponent } from "../../../shared/components/actions-bar/actions-bar.component";
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { AvailablePipe } from '../../pipes/available.pipe';

@Component({
  selector: 'app-product-page-layout',
  standalone: true,
  imports: [
    ActionsBarComponent,
    CommonModule,
    AvailablePipe
  ],
  templateUrl: './product-page-layout.component.html',
  styleUrl: './product-page-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPageLayoutComponent implements OnInit {

  public productService: ProductService = inject(ProductService);

  public productList: WritableSignal<Product[]> = signal<Product[]>([]);

  public productTermSearch: WritableSignal<string> = signal<string>("");

  public ngOnInit(): void {
    this.productService.getAllProducts().subscribe(response => this.productList.set(response));
  }

  public searchProduct(term: string): void {

    console.log({ term });

    // const productsFiltered: Product[] = this.productList().filter(product => product.name.trim().toLowerCase() === term.trim().toLowerCase());

    // this.productList.update(() => productsFiltered);
  }
}
