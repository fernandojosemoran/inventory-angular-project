import { Product, ProductResponseSkeleton } from '@/app/products/interfaces/product.interface';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { IProductProvider, Pagination } from '../interfaces/product.provider.interface';
import { ProductService } from '@/app/products/services/product.service';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductProviderService implements IProductProvider {

  private readonly productService: ProductService = inject(ProductService);

  public pagination: WritableSignal<Pagination> = signal<Pagination>({
    pageSize: 0,
    currentPage: 1,
    totalPages: 0
  });

  private readonly products : WritableSignal<Product[][]> = signal<Product[][]>([]);

  public constructor() {
    this.productService.getProductByPage().subscribe((response) => {
      const res: ProductResponseSkeleton = response.response;
      this.products.set([ res.content as Product[] ]);
      this.pagination.set({ pageSize: res.pageSize, currentPage: res.currentPage, totalPages: res.totalPages });
    });
  }

  public getProductByPage(page = 1): Observable<Product[]> {
    return this.productService.getProductByPage(page).pipe(map((response) => {
      this.products.update( oldProducts => [ ...oldProducts, response.response.content as Product[] ]);
      return this.products()[page - 1];
    }));
  };

  public get getProducts(): Product[][] {
    return this.products();
  }

  public getProductByCategory(category: string): Product[] {
    const products: Product[] = [];

    for (const prdList of this.products()) {
      for (const prd of prdList) {
        products.unshift(prd);
      }
    }

    return products.filter(product => product.categoryName.trim().toLowerCase() === category.trim().toLowerCase());
  }

  public getOneProduct(id: number): Product | undefined {
    const products: Product[] = [];

    for (const prd of this.products()) {
      prd.forEach(product => products.unshift(product));
    }

    return products.find(product => product.id === id);
  }

  public updateOneProduct(oldProduct: Product): Product[][] | undefined {
    const existProduct: Product | undefined = this.getOneProduct(oldProduct.id);
    let products: Product[] = [];

    this.productService.getProductByPage()
    .subscribe(response => products = [ ...response.response.content as Product[] ]);

    if (!existProduct) {
      // TODO: replace console.error() by custom errors
      console.error("Product was not updated because it does not exist.");
      return undefined;
    }

    this.products.update(prdList => [ ...prdList, products ]);

    return this.products();
  }

  public searchProducts(name: string): Product[] {
    const searchTerm = name.trim().toLowerCase();

    const products: Product[] = [];

    for (const prd of this.products()) {
      prd.forEach(product => products.unshift(product));
    }

    return products.filter(product => product.name.trim().toLowerCase().startsWith(searchTerm));;
  }

  public addOneProduct(product: Product): Product[][] {

    this.products.update(oldProducts => {
      oldProducts[0].unshift(product);
      return oldProducts;
    });

    return this.products();
  }

  public deleteOneProduct(id: number): Product[][] | undefined {
    const getProduct: Product | undefined = this.getOneProduct(id);
    const products: Product[] = [];

    if (!getProduct) return undefined;

    for (const productList of this.products()){
      for (const product of productList) {
        products.unshift(product);
      }
    }

    // const productsFiltered: Product[] = products.filter(product => product.id !== id);

    // this.products.update(products);

    // return productsFiltered;

    return this.products();
  }
}


/*

let flag = 0;
const newList = [];

for (let index = 1; index <= Math.round(products.length / 10); index++) {
    const newProductList = products.slice(flag, flag + 10);
    newList.unshift(newProductList);
    flag += 10;
}

console.log({ newList });

*/
