import { Product } from '@/app/products/interfaces/product.interface';
import { Injectable } from '@angular/core';
import { IProductProvider } from '../interfaces/product.provider.interface';

@Injectable({ providedIn: 'root' })
export class ProductProviderService implements IProductProvider {
  private products: Product[] = [];

  public getProducts(): Product[] {
    return this.products;
  }

  public getOneProduct(id: number): Product | undefined {
    // console.log({ getOneProduct : this.products });
    return this.products.find(product => product.id === id);
  }

  public searchProducts(name: string): Product[] {
    // console.log({ searchProducts : this.products });
    return this.products.filter(product => product.name === name);
  }

  public loadProducts(products: Product[]): void {
    // console.log({ loadProducts : this.products });
    this.products = products;
  }

  public addOneProduct(product: Product): void {
    // console.log({ addOneProduct : this.products });
    this.products = [ ...this.products, product ];
  }

  public deleteOneProduct(id: number): Product | undefined {
    // console.log({ deleteOneProduct : this.products });
    const getProduct: Product | undefined = this.getOneProduct(id);

    if (getProduct) return undefined;

    const products: Product[] = this.products.filter(product => product.id !== id);

    this.products = products;

    return getProduct;
  }
}
