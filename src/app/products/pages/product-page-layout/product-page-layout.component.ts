import { Product } from './../../interfaces/product.interface';
import { ChangeDetectionStrategy, Component, computed, inject, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { ActionsBarComponent } from "../../../shared/components/actions-bar/actions-bar.component";
import { CommonModule } from '@angular/common';
import { AvailablePipe } from '../../pipes/available.pipe';
import { EditProductDialogComponent } from '../../components/edit-product-dialog/edit-product-dialog.component';
import { ConfirmDeleteDialogComponent } from '@/app/shared/components/confirm-delete-dialog/confirm-delete-dialog.component';
import { ProductProviderService } from '@/app/shared/provider/product.provider.service';
import { ReverseFillButtonComponent } from '@/app/shared/components/reverse-fill-button/reverse-fill-button.component';
import { TableSkeletonComponent } from '@/app/shared/components/table-skeleton/table-skeleton.component';
import { ProductService } from '../../services/product.service';
import { CategoryProvider } from '@/app/shared/provider/categories.provider.service';
import { DropDownSelectedOption } from '@/app/shared/interfaces/dropdown.interface';

@Component({
  selector: 'app-product-page-layout',
  standalone: true,
  imports: [
    ActionsBarComponent,
    CommonModule,
    AvailablePipe,
    EditProductDialogComponent,
    ConfirmDeleteDialogComponent,
    ReverseFillButtonComponent,
    TableSkeletonComponent,
  ],
  templateUrl: './product-page-layout.component.html',
  styleUrl: './product-page-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPageLayoutComponent implements OnInit{
  private readonly categoryService: CategoryProvider = inject(CategoryProvider);
  private readonly productProvider: ProductProviderService = inject(ProductProviderService);
  private readonly productService: ProductService = inject(ProductService);

  public skeletonLoaderFlag: WritableSignal<boolean> = signal<boolean>(true);
  public productList: WritableSignal<Product[]> = signal<Product[]>([]);
  public productTermSearch: WritableSignal<string> = signal<string>("");
  public editProductSelected: WritableSignal<Product> = signal<Product>({} as Product);
  public deleteProductSelected: WritableSignal<Product> = signal<Product>({} as Product);
  public editProductModalFlag: WritableSignal<boolean> = signal<boolean>(false);
  public deleteProductModalFlag: WritableSignal<boolean> = signal<boolean>(false);

  public ngOnInit(): void {
    const allProducts: Product[] = this.productProvider.getProducts();
    if (allProducts.length > 0) {
      this.skeletonLoaderFlag.set(false);
      this.productList.set(allProducts);
    }
  }
  public getCategories: Signal<string[]> = computed(() => {
    const categories: string[] = this.categoryService.getCategories().map(opt => opt.name);
    categories.unshift("Ninguno");
    return categories;
  });

  public dropdownOptionSelected(opt: DropDownSelectedOption): void {
    if (opt.name === "Ninguno") return this.productList.set(this.productProvider.getProducts());

    this.productList.set(this.productProvider.getProductByCategory(opt.name));
  }

  public editProduct(id: number): void {
    const product: Product | undefined = this.productProvider.getOneProduct(id);

    if (!product) return;

    this.editProductSelected.set(product);

    this.editProductModalFlag.update(value => !value);
  }

  public deleteProduct(id: number): void {
    const product: Product | undefined = this.productProvider.getOneProduct(id);

    if (!product) return;

    this.deleteProductSelected.set(product);

    this.deleteProductModalFlag.update(value => !value);
  }

  public confirmEditProduct(isConfirm: boolean): void {
    if (!isConfirm) return this.editProductModalFlag.update(() => isConfirm);

    this.editProductModalFlag.set(!isConfirm);

    // this.productService.updateProduct({} as Product);
  }

  public confirmDeleteProduct(isConfirm: boolean): void {
    if (!isConfirm) return this.deleteProductModalFlag.update(() => isConfirm);

    this.deleteProductModalFlag.set(!isConfirm);

    const products = this.productProvider.deleteOneProduct(this.deleteProductSelected().id);

    // TODO: replace console.error() with custom errors
    if (!products) return console.error("delete product not work");

    this.productList.set(products);

    this.productService.deleteProduct(this.deleteProductSelected().id).subscribe(res => console.log(res));
  }

  public searchProduct(term: string): void {
    if (term.length === 0) return this.productList.set(this.productProvider.getProducts());

    this.productService.searchProduct(term)
    .subscribe(response => this.productList.set(response));

  }
}
