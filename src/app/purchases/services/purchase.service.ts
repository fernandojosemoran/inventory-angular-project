import { BackendProxy } from "@/app/shared/types/backend-proxy";
import { environments } from "@/environments/environments";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import AuthHttpError from "@/app/auth/errors/auth-http-error";
import LocalStorageProperties from "@/app/shared/constants/local-storage-properties";
import { environments } from "@/environments/environments";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import { Injectable, inject } from "@angular/core";
import { Observable, catchError, map } from "rxjs";
import { IPurchaseService, Purchase, PurchaseResponse } from "../interfaces/purchase";

import AuthHttpError from "@/app/auth/errors/auth-http-error";
import LocalStorageProperties from "@/app/shared/constants/local-storage-properties";

// hidden dependencies

const BACKEND_PROXY: BackendProxy = "WEBSITE";
const BACKEND_API: string = environments.proxy === BACKEND_PROXY ? environments.backendApiWebsite : environments.backendApi;

@Injectable({ providedIn: "root" })
export default class PurchaseService implements IPurchaseService {
  private readonly _httpClient: HttpClient = inject(HttpClient);
  private readonly _ACCESS_TOKEN: string = localStorage.getItem(LocalStorageProperties.ACCESS_TOKEN) ?? "";
  private readonly _DEFAULT_HEADERS: HttpHeaders = new HttpHeaders().set("Authorization", `Bearer ${this._ACCESS_TOKEN}`);

  public createPurchase(purchase: Purchase): Observable<PurchaseResponse> {
    return this._httpClient
      .post<PurchaseResponse>(BACKEND_API.concat("/purchase/create"), purchase, { headers: this._DEFAULT_HEADERS })
      .post<PurchaseResponse>(BACKEND_URL.concat("/purchase/create"), purchase, { headers: this._DEFAULT_HEADERS })
      .pipe(catchError(AuthHttpError.handler));
  }

  public updatePurchase(purchase: Purchase): Observable<PurchaseResponse> {
    return this._httpClient
      .put<PurchaseResponse>(BACKEND_API.concat(`/purchase/update`), purchase, { headers: this._DEFAULT_HEADERS })
      .put<PurchaseResponse>(BACKEND_URL.concat(`/purchase/update`), purchase, { headers: this._DEFAULT_HEADERS })
      .pipe(catchError(AuthHttpError.handler));
  }

  public deletePurchase(id: number): Observable<boolean> {
    return this._httpClient
      .delete<PurchaseResponse>(BACKEND_API.concat(`/purchase/delete/${id}`), { headers: this._DEFAULT_HEADERS })
      .delete<PurchaseResponse>(BACKEND_URL.concat(`/purchase/delete/${id}`), { headers: this._DEFAULT_HEADERS })
      .pipe(
        catchError(AuthHttpError.handler),
        map((response) => (response.response ? true : false)),
      );
  }

  public getPurchaseById(id: number): Observable<PurchaseResponse> {
    return this._httpClient
      .get<PurchaseResponse>(BACKEND_API.concat(`/purchase/${id}`), { headers: this._DEFAULT_HEADERS })
      .get<PurchaseResponse>(BACKEND_URL.concat(`/purchase/${id}`), { headers: this._DEFAULT_HEADERS })
      .pipe(catchError(AuthHttpError.handler));
  }

  public searchPurchase(term: string): Observable<PurchaseResponse> {
    return this._httpClient
      .get<PurchaseResponse>(BACKEND_API.concat(`/purchase/search/${term}`), { headers: this._DEFAULT_HEADERS })
      .get<PurchaseResponse>(BACKEND_URL.concat(`/purchase/search/${term}`), { headers: this._DEFAULT_HEADERS })
      .pipe(catchError(AuthHttpError.handler));
  }

  public getAll(): Observable<Purchase[]> {
    return this._httpClient
      .get<PurchaseResponse>(BACKEND_API.concat("/purchase/getAll"), { headers: this._DEFAULT_HEADERS })
      .get<PurchaseResponse>(BACKEND_URL.concat("/purchase/getAll"), { headers: this._DEFAULT_HEADERS })
      .pipe(
        catchError(AuthHttpError.handler),
        map((response) => response.response as Purchase[]),
      );
  }
}
