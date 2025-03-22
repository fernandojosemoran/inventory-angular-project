import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Product, ProductResponse, ProductListResponse } from "../interfaces/product.interface";
import { IProductService } from "../interfaces/product.service.interface";
import { environments } from "@/environments/environments";

// hidden dependencies
const BACKEND_API: string = environments.backendApi;

@Injectable({ providedIn: "root" })
export class ProductService implements IProductService {
  private readonly _http: HttpClient = inject(HttpClient);

  public getAllProducts(): Observable<Product[]> {
    return this._http.get<ProductListResponse>(`${BACKEND_API}/products`).pipe(map(response => response.response));
  }

  public getProduct(id: string): Observable<Product> {
    return this._http.get<ProductResponse>(`${BACKEND_API}/products/${id}`).pipe(map(response => response.response));
  }

  public createProduct(product: Product): Observable<Product> {
    return this._http.post<ProductResponse>(`${BACKEND_API}/products`, product).pipe(map(response => response.response));
  }

  public updateProduct(product: Product): Observable<Product> {
    return this._http.put<ProductResponse>(`${BACKEND_API}/products/${product.id}`, product).pipe(map(response => response.response));
  }

  public deleteProduct(id: string): Observable<boolean> {
    return this._http.delete(`${BACKEND_API}/products/${id}`, { observe: "response" }).pipe(map(response => response.ok));
  }

  public searchProduct(name: string): Observable<Product[]> {
    return this._http.get<ProductListResponse>(`${BACKEND_API}/products/search/${name}`).pipe(map(response => response.response));
  }
}
