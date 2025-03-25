import { Product } from './../../interfaces/product.interface';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ActionsBarComponent } from "../../../shared/components/actions-bar/actions-bar.component";
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { AvailablePipe } from '../../pipes/available.pipe';
import { EditProductDialogComponent } from '../../components/edit-product-dialog/edit-product-dialog.component';
import { ConfirmDeleteDialogComponent } from '@/app/shared/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { ProductProviderService } from '@/app/shared/provider/product.provider.service';

@Component({
  selector: 'app-product-page-layout',
  standalone: true,
  imports: [
    ActionsBarComponent,
    CommonModule,
    AvailablePipe,
    EditProductDialogComponent,
    ConfirmDeleteDialogComponent,

  ],
  templateUrl: './product-page-layout.component.html',
  styleUrl: './product-page-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPageLayoutComponent implements OnInit {

  public productService: ProductService = inject(ProductService);
  public productState: ProductProviderService = inject(ProductProviderService);

  public productList: WritableSignal<Product[]> = signal<Product[]>([]);
  public productTermSearch: WritableSignal<string> = signal<string>("");
  public editProductSelected: WritableSignal<Product> = signal<Product>({} as Product);
  public deleteProductSelected: WritableSignal<Product> = signal<Product>({} as Product);

  public editProductModalFlag: WritableSignal<boolean> = signal<boolean>(false);
  public deleteProductModalFlag: WritableSignal<boolean> = signal<boolean>(false);

  public ngOnInit(): void {
    this.productService.getAllProducts().subscribe(response => {
      this.productList.set(response);
      this.productState.loadProducts(response);
    });
  }

  public editProduct(id: number): void {
    const product: Product | undefined = this.productState.getOneProduct(id);

    if (!product) return;

    this.editProductSelected.update(() => product);

    this.editProductModalFlag.update(value => !value);
  }

  public deleteProduct(id: number): void {
    const product: Product | undefined = this.productState.getOneProduct(id);

    if (!product) return;

    this.deleteProductSelected.update(() => product);

    this.deleteProductModalFlag.update(value => !value);
  }
  public confirmEditProduct(isConfirm: boolean): void {
    if (!isConfirm) return this.editProductModalFlag.update(() => isConfirm);

    this.editProductModalFlag.update(() => !isConfirm);

    // this.productService.updateProduct({} as Product);
  }

  public confirmDeleteProduct(isConfirm: boolean): void {
    if (!isConfirm) return this.deleteProductModalFlag.update(() => isConfirm);

    this.deleteProductModalFlag.update(() => !isConfirm);
    // this.productService.deleteProduct("");
  }


  public searchProduct(term: string): void {

    console.log({ term });

    // const productsFiltered: Product[] = this.productList().filter(product => product.name.trim().toLowerCase() === term.trim().toLowerCase());

    // this.productList.update(() => productsFiltered);
  }
}
