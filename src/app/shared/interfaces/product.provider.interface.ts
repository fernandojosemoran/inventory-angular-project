import { Product } from "@/app/products/interfaces/product.interface";
import { Observable } from "rxjs";

export interface IProductProvider {
  getProductByPage(page: number): Observable<Product[]>;
  getOneProduct(id: number): Product | undefined;
  searchProducts(name: string): Product[];
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  pageSize: number;
}
