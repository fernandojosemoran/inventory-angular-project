import { environments } from "@/environments/environments";
import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, catchError, map } from "rxjs";
import { Product, ProductResponse } from "../interfaces/product.interface";
import { IProductService } from "../interfaces/product.service.interface";

import ProductHttpError from "../errors/product-http-error";

// hidden dependencies
const BACKEND_API: string = environments.backendApi;

@Injectable({ providedIn: "root" })
export class ProductService implements IProductService {
  private readonly _http: HttpClient = inject(HttpClient);

  public getProductByPage(page = 0, size = 10): Observable<ProductResponse> {
    return this._http
      .get<ProductResponse>(`${BACKEND_API}/products/page?page=${page}&size=${size}`)
      .pipe(catchError(ProductHttpError.handler));
  }

  public getProduct(id: number): Observable<Product> {
    return this._http.get<ProductResponse>(`${BACKEND_API}/products/${id}`).pipe(
      catchError(ProductHttpError.handler),
      map((response) => response.response.content as Product),
    );
  }

  public createProduct(product: FormData): Observable<Product | undefined> {
    return this._http.post<ProductResponse>(`${BACKEND_API}/products`, product).pipe(
      catchError(ProductHttpError.handler),
      map((response) => response && (response.response.content as Product)),
    );
  }

  public updateProduct(product: Product): Observable<Product> {
    return this._http.put<ProductResponse>(`${BACKEND_API}/products/${product.id}`, product).pipe(
      catchError(ProductHttpError.handler),
      map((response) => response.response.content as Product),
    );
  }

  public deleteProduct(id: number): Observable<boolean | undefined> {
    return this._http.delete(`${BACKEND_API}/products/${id}`, { observe: "response" }).pipe(
      catchError(ProductHttpError.handler),
      map((response) => response!.ok),
    );
  }

  public searchProduct(name: string): Observable<Product[]> {
    return this._http.get<{ status: string; response: Product[] }>(`${BACKEND_API}/products/search?keyword=${name}`).pipe(
      catchError(ProductHttpError.handler),
      // TODO: change this http request
      map((response) => response.response as Product[]),
    );
  }
}
