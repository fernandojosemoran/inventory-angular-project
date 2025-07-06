import { ProductService } from "@/app/products/services/product.service";
import { ProductProviderService } from "@/app/shared/provider/product.provider.service";
import { CommonModule } from "@angular/common";
import { Component, WritableSignal, inject, signal } from "@angular/core";
import { ActionsBarComponent } from "../../../shared/components/actions-bar/actions-bar.component";
import { CreateNewCartDialogComponent } from "../../components/create-new-cart-dialog/create-new-cart-dialog.component";
import { CartItem } from "../../types/cart";

@Component({
  selector: "app-cart-layout",
  imports: [ActionsBarComponent, CreateNewCartDialogComponent, CommonModule],
  templateUrl: "./cart-page-layout.component.html",
  styleUrl: "./cart-page-layout.component.css",
})
export class CartPageLayoutComponent {
  public readonly isOpenCreateNewCartDialog: WritableSignal<boolean> = signal<boolean>(false);
  private readonly productProvider: ProductProviderService = inject(ProductProviderService);
  private readonly productService: ProductService = inject(ProductService);
  public readonly productNames: WritableSignal<string[]> = signal<string[]>([]);

  public createNewCart(cart: CartItem): void {
    console.log(cart);
    this.isOpenCreateNewCartDialog.set(false);
  }

  public openCreateNewCartDialog(): void {
    this.isOpenCreateNewCartDialog.set(true);

    const products: string[] = [];

    for (const prd of this.productProvider.getProducts[0]) {
      products.push(prd.name);
    }

    this.productNames.set(products);
  }

  public closeCreateNewCartDialog(isClose: boolean): void {
    this.isOpenCreateNewCartDialog.set(!isClose);
  }
}
