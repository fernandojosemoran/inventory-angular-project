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
import { AddProductDialogComponent } from "../../components/add-product-dialog/add-product-dialog.component";
import { Pagination } from '@/app/shared/interfaces/product.provider.interface';

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
    AddProductDialogComponent
],
  templateUrl: './product-page-layout.component.html',
  styleUrl: './product-page-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPageLayoutComponent implements OnInit{
  private readonly categoryService: CategoryProvider = inject(CategoryProvider);
  private readonly productProvider: ProductProviderService = inject(ProductProviderService);
  private readonly productService: ProductService = inject(ProductService);

  public pagination: WritableSignal<Pagination> = signal<Pagination>(this.productProvider.pagination());

  public skeletonLoaderFlag: WritableSignal<boolean> = signal<boolean>(true);
  public productList: WritableSignal<Product[]> = signal<Product[]>([]);

  public productTermSearch: WritableSignal<string> = signal<string>("");
  public editProductSelected: WritableSignal<Product> = signal<Product>({} as Product);
  public deleteProductSelected: WritableSignal<Product> = signal<Product>({} as Product);

  public editProductModalFlag: WritableSignal<boolean> = signal<boolean>(false);
  public deleteProductModalFlag: WritableSignal<boolean> = signal<boolean>(false);
  public addProductModalFlag: WritableSignal<boolean> = signal<boolean>(false);

  public ngOnInit(): void {
    this.productProvider.getProductByPage().subscribe(
      (productList) => {
        console.warn({ productList });
        if (productList.length > 0) {
          this.skeletonLoaderFlag.set(false);
          this.productList.set(productList);
        }
      }
    );

  }

  public ChangePage(event: Event): void {
    const numberInput: HTMLInputElement = (event.target) as HTMLInputElement;

    this.productProvider.getProductByPage(+numberInput.value).subscribe(productList => this.productList.set(productList));
  }

  public getCategories: Signal<string[]> = computed(() => {
    const categories: string[] = this.categoryService.categories().map(opt => opt.name);
    categories.unshift("Ninguno");
    return categories;
  });

  public dropdownOptionSelected(opt: DropDownSelectedOption): void {
    // if (opt.name === "Ninguno") return this.productList.set(this.productProvider.getProducts());

    this.productList.set(this.productProvider.getProductByCategory(opt.name));
  }

  public editProduct(id: number): void {
    const product: Product | undefined = this.productProvider.getOneProduct(id);

    if (!product) return;

    this.editProductSelected.set(product);

    this.editProductModalFlag.update(value => !value);
  }

  public openCreateNewProductDialog(wentClickedCreateNewProductBtn: boolean) {
    this.addProductModalFlag.set(wentClickedCreateNewProductBtn);
  }

  public closeCreateNewProductDialog(wentClickedCreateNewProductBtn: boolean) {
    this.addProductModalFlag.set(!wentClickedCreateNewProductBtn);
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

    this.productList.set(products[this.productProvider.pagination().currentPage]);

    this.productService.deleteProduct(this.deleteProductSelected().id).subscribe(res => console.log(res));
  }

  public searchProduct(term: string): void {

    if (term.length === 0) return this.productList.set(this.productProvider.getProducts[this.pagination().currentPage]);

    this.productService.searchProduct(term)
    .subscribe((response: Product[]) => this.productList.set(response));

  }
}
