import { environments } from "@/environments/environments";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, catchError, map, tap } from "rxjs";
import { BackendProxy } from "../../shared/types/backend-proxy";
import { Product, ProductResponse } from "../interfaces/product.interface";
import { IProductService } from "../interfaces/product.service.interface";

import LocalStorageProperties from "@/app/shared/constants/local-storage-properties";
import ProductHttpError from "../errors/product-http-error";

// hidden dependencies
const BACKEND_PROXY: BackendProxy = "WEBSITE";
const BACKEND_API: string = environments.proxy === BACKEND_PROXY ? environments.backendApiWebsite : environments.backendApi;

@Injectable({ providedIn: "root" })
export class ProductService implements IProductService {
  private readonly _http: HttpClient = inject(HttpClient);

  private readonly _ACCESS_TOKEN: string = localStorage.getItem(LocalStorageProperties.ACCESS_TOKEN) ?? "";
  private readonly _DEFAULT_HEADERS: HttpHeaders = new HttpHeaders().set("Authorization", `Bearer ${this._ACCESS_TOKEN}`);

  public getProductByPage(page = 1, size = 10): Observable<ProductResponse> {
    // ?page=${page}&size=${size}
    if (page > 0) page--;

    return this._http
      .get<ProductResponse>(BACKEND_API.concat(`/products/page`), { params: { page, size }, headers: this._DEFAULT_HEADERS })
      .pipe(catchError(ProductHttpError.handler));
  }

  public getProduct(id: number): Observable<Product> {
    return this._http.get<ProductResponse>(BACKEND_API.concat(`/products/${id}`), { headers: this._DEFAULT_HEADERS }).pipe(
      catchError(ProductHttpError.handler),
      map((response) => response.response.content as Product),
    );
  }

  public createProduct(product: FormData): Observable<Product | undefined> {
    return this._http.post<ProductResponse>(BACKEND_API.concat("/products"), product, { headers: this._DEFAULT_HEADERS }).pipe(
      catchError(ProductHttpError.handler),
      map((response) => response && (response.response.content as Product)),
    );
  }

  public updateProduct(product: Product): Observable<Product> {
    return this._http
      .put<ProductResponse>(BACKEND_API.concat(`/products/${product.id}`), product, { headers: this._DEFAULT_HEADERS })
      .pipe(
        catchError(ProductHttpError.handler),
        map((response) => response.response.content as Product),
      );
  }

  public deleteProduct(id: number): Observable<boolean | undefined> {
    return this._http.delete(BACKEND_API.concat(`/products/${id}`), { observe: "response", headers: this._DEFAULT_HEADERS }).pipe(
      catchError(ProductHttpError.handler),
      map((response) => response!.ok),
    );
  }

  public searchProduct(name: string): Observable<Product[]> {
    return this._http
      .get<{ status: string; response: Product[] }>(BACKEND_API.concat(`/products/search`), {
        params: { keyword: name },
        headers: this._DEFAULT_HEADERS,
      })
      .pipe(
        catchError(ProductHttpError.handler),
        // TODO: change this http request
        map((response) => response.response as Product[]),
      );
  }
}
