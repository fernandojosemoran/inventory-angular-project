import AuthHttpError from "@/app/auth/errors/auth-http-error";
import { environments } from "@/environments/environments";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, catchError, map, of, throwError } from "rxjs";
import { IPurchaseService, Purchase, PurchaseResponse } from "../interfaces/purchase";

// hidden dependencies

const BACKEND_URL: string = environments.backendApi;

@Injectable({ providedIn: "root" })
export default class PurchaseService implements IPurchaseService {
  private readonly _httpClient: HttpClient = inject(HttpClient);

  public createPurchase(purchase: Purchase): Observable<PurchaseResponse> {
    return this._httpClient
      .post<PurchaseResponse>(`${BACKEND_URL}/purchase/create`, purchase)
      .pipe(catchError(AuthHttpError.handler));
  }

  public updatePurchase(purchase: Purchase): Observable<PurchaseResponse> {
    return this._httpClient
      .put<PurchaseResponse>(`${BACKEND_URL}/purchase/update`, purchase)
      .pipe(catchError(AuthHttpError.handler));
  }

  public deletePurchase(id: number): Observable<boolean> {
    return this._httpClient.delete<PurchaseResponse>(`${BACKEND_URL}/purchase/delete/${id}`).pipe(
      catchError(AuthHttpError.handler),
      map((response) => (response.response ? true : false)),
    );
  }

  public getPurchaseById(id: number): Observable<PurchaseResponse> {
    return this._httpClient.get<PurchaseResponse>(`${BACKEND_URL}/purchase/${id}`).pipe(catchError(AuthHttpError.handler));
  }

  public searchPurchase(term: string): Observable<PurchaseResponse> {
    return this._httpClient
      .get<PurchaseResponse>(`${BACKEND_URL}/purchase/search/${term}`)
      .pipe(catchError(AuthHttpError.handler));
  }

  public getAll(): Observable<Purchase[]> {
    return this._httpClient.get<PurchaseResponse>(`${BACKEND_URL}/purchase/getAll`).pipe(
      catchError(AuthHttpError.handler),
      map((response) => response.response as Purchase[]),
    );
  }
}
