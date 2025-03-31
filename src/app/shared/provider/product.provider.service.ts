import { Product } from '@/app/products/interfaces/product.interface';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { IProductProvider } from '../interfaces/product.provider.interface';
import { ProductService } from '@/app/products/services/product.service';

@Injectable({ providedIn: 'root' })
export class ProductProviderService implements IProductProvider {

  private readonly productService: ProductService = inject(ProductService);

  private products: WritableSignal<Product[]> = signal<Product[]>([]);

  public constructor() {
    this.productService.getAllProducts().subscribe(response => this.products.set(response));
  }

  public getProducts(): Product[] {
    return this.products();
  }

  public getProductByCategory(category: string): Product[] {
    return this.products().filter(product => product.categoryName.trim().toLowerCase() === category.trim().toLowerCase());
  }

  public getOneProduct(id: number): Product | undefined {
    return this.products().find(product => product.id === id);
  }

  public updateOneProduct(oldProduct: Product): Product[] | undefined {
    const existProduct: Product | undefined = this.getOneProduct(oldProduct.id);

    if (!existProduct) {
      // TODO: replace console.error() by custom errors
      console.error("Product was not updated because it does not exist.");
      return undefined;
    }

    const products: Product[] = this.products().filter(product => product.id !== existProduct!.id);
    this.products.set(products);

    return this.getProducts();
  }

  public searchProducts(name: string): Product[] {
    const searchTerm = name.trim().toLowerCase();
    return this.products().filter(product => product.name.trim().toLowerCase().startsWith(searchTerm));
  }

  public addOneProduct(product: Product): Product[] {
    this.products.update((products) => [ ...products, product ]);
    return this.getProducts();
  }

  public deleteOneProduct(id: number): Product[] | undefined {
    const getProduct: Product | undefined = this.getOneProduct(id);

    if (!getProduct) return undefined;

    const products: Product[] = this.products().filter(product => product.id !== id);

    this.products.set(products);

    return this.getProducts();
  }
}
