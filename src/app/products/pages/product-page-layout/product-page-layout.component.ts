import { ConfirmDeleteDialogComponent } from "@/app/shared/components/confirm-delete-dialog/confirm-delete-dialog.component";
import { ReverseFillButtonComponent } from "@/app/shared/components/reverse-fill-button/reverse-fill-button.component";
import { TableSkeletonComponent } from "@/app/shared/components/table-skeleton/table-skeleton.component";
import { DropDownSelectedOption } from "@/app/shared/interfaces/dropdown.interface";
import { Pagination } from "@/app/shared/interfaces/product.provider.interface";
import { CategoryProvider } from "@/app/shared/provider/categories.provider.service";
import { ProductProviderService } from "@/app/shared/provider/product.provider.service";
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit, Signal, WritableSignal, computed, inject, signal } from "@angular/core";
import { ActionsBarComponent } from "../../../shared/components/actions-bar/actions-bar.component";
import { AddProductDialogComponent } from "../../components/add-product-dialog/add-product-dialog.component";
import { EditProductDialogComponent } from "../../components/edit-product-dialog/edit-product-dialog.component";
import { AvailablePipe } from "../../pipes/available.pipe";
import { ProductService } from "../../services/product.service";
import { Product } from "./../../interfaces/product.interface";

import CategoryHttpError from "@/app/categories/errors/category-http-error";
import { Category } from "@/app/categories/interfaces/category.interface";
import GlobalAlertProvider from "@/app/shared/provider/global-alert.provider.service";
import { map } from "rxjs";
import ProductHttpError from "../../errors/product-http-error";
import DefaultImagePipe from "../../pipes/default-image.pipe";

@Component({
  selector: "app-product-page-layout",
  imports: [
    ActionsBarComponent,
    CommonModule,
    AvailablePipe,
    DefaultImagePipe,
    EditProductDialogComponent,
    ConfirmDeleteDialogComponent,
    ReverseFillButtonComponent,
    TableSkeletonComponent,
    AddProductDialogComponent,
  ],
  templateUrl: "./product-page-layout.component.html",
  styleUrl: "./product-page-layout.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPageLayoutComponent implements OnInit {
  private readonly _categoryService: CategoryProvider = inject(CategoryProvider);
  private readonly _productProvider: ProductProviderService = inject(ProductProviderService);
  private readonly _productService: ProductService = inject(ProductService);
  private readonly _globalAlertProvider: GlobalAlertProvider = inject(GlobalAlertProvider);

  public pagination: WritableSignal<Pagination> = signal<Pagination>(this._productProvider.getPagination());

  public skeletonLoaderFlag: WritableSignal<boolean> = signal<boolean>(true);
  public productList: WritableSignal<Product[]> = signal<Product[]>([]);

  public productTermSearch: WritableSignal<string> = signal<string>("");
  public editProductSelected: WritableSignal<Product> = signal<Product>({} as Product);
  public deleteProductSelected: WritableSignal<Product> = signal<Product>({} as Product);

  public editProductModalFlag: WritableSignal<boolean> = signal<boolean>(false);
  public deleteProductModalFlag: WritableSignal<boolean> = signal<boolean>(false);
  public addProductModalFlag: WritableSignal<boolean> = signal<boolean>(false);

  private handlerGetAllProductsResponse(productList: Product[]): void {
    if (productList.length <= 0) return;

    this.skeletonLoaderFlag.set(false);
    this.productList.set(productList);
  }

  public ngOnInit(): void {
    this._productProvider.loadProductProviderService();

    this._productProvider.getProductByPage().subscribe({
      error: (error: ProductHttpError): void => this._globalAlertProvider.showAlert(error.message),
      next: (products): void => this.handlerGetAllProductsResponse(products),
    });
  }

  public changePage(event: Event): void {
    const numberInput: HTMLInputElement = event.target as HTMLInputElement;

    this._productProvider.getProductByPage(+numberInput.value).subscribe((productList) => this.productList.set(productList));
  }

  public getCategories: Signal<string[]> = computed(() => {
    const categoryNames: string[] = [];

    this._categoryService.getAllCategories.subscribe({
      error: (error: CategoryHttpError): void => this._globalAlertProvider.showAlert(error.message),
      next: (categories: Category[]): void => categories.forEach((opt) => categoryNames.unshift(opt.name)),
    });

    return categoryNames;
  });

  public dropdownOptionSelected(opt: DropDownSelectedOption): void {
    // if (opt.name === "Ninguno") return this.productList.set(this.productProvider.getProducts());

    this.productList.set(this._productProvider.getProductByCategory(opt.name));
  }

  public editProduct(id: number): void {
    const product: Product | undefined = this._productProvider.getOneProduct(id);

    if (!product) return;

    this.editProductSelected.set(product);

    this.editProductModalFlag.update((value) => !value);
  }

  public confirmCreateProduct(product: FormData): void {
    if (!product) return;

    this._productService.createProduct(product).subscribe({
      error: (error: ProductHttpError): void => this._globalAlertProvider.showAlert(error.message),
      next: (product): void => console.log(`product ${product?.name} created successfully 😃.`),
    });
  }

  public openCreateNewProductDialog(wentClickedCreateNewProductBtn: boolean): void {
    this.addProductModalFlag.set(wentClickedCreateNewProductBtn);
  }

  public closeCreateNewProductDialog(wentClickedCreateNewProductBtn: boolean): void {
    this.addProductModalFlag.set(!wentClickedCreateNewProductBtn);
  }

  public deleteProduct(id: number): void {
    const product: Product | undefined = this._productProvider.getOneProduct(id);

    if (!product) return;

    this.deleteProductSelected.set(product);

    this.deleteProductModalFlag.update((value) => !value);
  }

  public confirmEditProduct(isConfirm: boolean): void {
    if (!isConfirm) return this.editProductModalFlag.update(() => isConfirm);

    this.editProductModalFlag.set(!isConfirm);

    this._productService.updateProduct(this.editProductSelected()).subscribe({
      error: (error: ProductHttpError): void => this._globalAlertProvider.showAlert(error.message),
      next: (product): void => console.info(`product ${product?.name} updated successfully 😉.`),
    });
  }

  public confirmDeleteProduct(isConfirm: boolean): void {
    if (!isConfirm) return this.deleteProductModalFlag.update(() => isConfirm);

    this.deleteProductModalFlag.set(!isConfirm);

    const id: number = this.deleteProductSelected().id;

    const products = this._productProvider.deleteOneProduct(id);

    if (!products) return this._globalAlertProvider.showAlert(`Lo siento, producto no pudo ser eliminado.`);

    this.productList.set(products[this._productProvider.getPagination().currentPage]);

    this._productService.deleteProduct(this.deleteProductSelected().id).subscribe({
      error: (error: ProductHttpError): void => this._globalAlertProvider.showAlert(error.message),
      next: (): void => this._globalAlertProvider.showAlert(`El producto con el ID ${id} eliminado correctamente`),
    });
  }

  public searchProduct(term: string): void {
    if (term.length === 0) return this.productList.set(this._productProvider.getProducts[this.pagination().currentPage]);

    this._productService.searchProduct(term).subscribe({
      error: (error: ProductHttpError): void => this._globalAlertProvider.showAlert(error.message),
      next: (response: Product[]): void => this.productList.set(response),
    });
  }
}
