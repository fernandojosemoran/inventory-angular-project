import { Observable } from "rxjs";
import { Product } from "./product.interface";

export interface IProductService {
  getAllProducts(): Observable<Product[]>;
  getProduct(id: number): Observable<Product>;
  createProduct(product: Product): Observable<Product>;
  updateProduct(product: Product): Observable<Product>;
  deleteProduct(id: number): Observable<boolean | undefined>;
  searchProduct(name: string): Observable<Product[]>
}
