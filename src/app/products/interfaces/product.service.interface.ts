import { Observable } from "rxjs";
import { Product, ProductResponse } from "./product.interface";

export interface IProductService {
  getProductByPage(page: number, size?: number): Observable<ProductResponse>;
  getProduct(id: number): Observable<Product>;
  createProduct(product: FormData): Observable<Product | undefined>;
  updateProduct(product: Product): Observable<Product>;
  deleteProduct(id: number): Observable<boolean | undefined>;
  searchProduct(name: string): Observable<Product[]>;
}
