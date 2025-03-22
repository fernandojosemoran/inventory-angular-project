import { Observable } from "rxjs";
import { Product } from "./product.interface";

export interface IProductService {
  getAllProducts(): Observable<Product[]>;
  getProduct(id: string): Observable<Product>;
  createProduct(product: Product): Observable<Product>;
  updateProduct(product: Product): Observable<Product>;
  deleteProduct(id: string): Observable<boolean>;
  searchProduct(name: string): Observable<Product[]>
}
