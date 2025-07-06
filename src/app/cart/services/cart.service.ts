import { environments } from "@/environments/environments";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, catchError, map } from "rxjs";
import { ICartService } from "../interfaces/cart.interface";
import { CartItem } from "../types/cart";
import {
  AddProductToCartItemResponse,
  DecreaseCartItemResponse,
  DeleteCartItemResponse,
  DeleteCartResponse,
  GetActiveCartsResponse,
  GetCartCount,
} from "../types/cart-http-response";
import { AddProductToCartParams } from "../types/cart-params";

import LocalStorageProperties from "@/app/shared/constants/local-storage-properties";
import CartHttpError from "../errors/cart-http-error";

const BACKEND_API: string = environments.backendApi;

@Injectable({ providedIn: "root" })
export class CartService implements ICartService {
  private readonly _http: HttpClient = inject(HttpClient);
  private readonly _ACCESS_TOKEN: string = localStorage.getItem(LocalStorageProperties.ACCESS_TOKEN) ?? "";
  private readonly _DEFAULT_HEADERS: HttpHeaders = new HttpHeaders().set("Authorization", `Bearer ${this._ACCESS_TOKEN}`);

  public getActiveCartItemCount(): Observable<number> {
    return this._http.get<GetActiveCartsResponse>(BACKEND_API.concat(`/carts/active`), { headers: this._DEFAULT_HEADERS }).pipe(
      catchError(CartHttpError.handler),
      map((response) => response.response.totalItemsCount),
    );
  }

  public getCurrentActiveCartItem(): Observable<number> {
    return this._http.get<GetActiveCartsResponse>(BACKEND_API.concat(`/carts/active`), { headers: this._DEFAULT_HEADERS }).pipe(
      catchError(CartHttpError.handler),
      map((response) => response.response.id),
    );
  }

  public deleteCartItem(id: number): Observable<string> {
    return this._http
      .delete<DeleteCartItemResponse>(BACKEND_API.concat(`/carts/items/${id}`), { headers: this._DEFAULT_HEADERS })
      .pipe(
        catchError(CartHttpError.handler),
        map(({ response }) => response.response.cart_message),
      );
  }

  public getCartCount(): Observable<number> {
    return this._http.get<GetCartCount>(BACKEND_API.concat(`/carts/items/${id}`), { headers: this._DEFAULT_HEADERS }).pipe(
      catchError(CartHttpError.handler),
      map((response) => response.response),
    );
  }

  public addProductToCart(product: AddProductToCartParams): Observable<string> {
    return this._http
      .post<AddProductToCartItemResponse>(BACKEND_API.concat("/carts/add-product"), undefined, {
        params: { ...product },
        headers: this._DEFAULT_HEADERS,
      })
      .pipe(
        catchError(CartHttpError.handler),
        map(({ response }) => response.response.cart_message),
      );
  }

  public getAllCarts(): Observable<CartItem[]> {
    return this._http.get<GetActiveCartsResponse>(BACKEND_API.concat("/carts"), { headers: this._DEFAULT_HEADERS }).pipe(
      catchError(CartHttpError.handler),
      map((response) => response.response.cartItems),
    );
  }

  public decreaseItemQuantity(id: number): Observable<string> {
    return this._http
      .patch<DecreaseCartItemResponse>(BACKEND_API.concat(`/carts/items/${id}/decrease`), undefined, {
        headers: this._DEFAULT_HEADERS,
      })
      .pipe(
        catchError(CartHttpError.handler),
        map(({ response }) => response.response.cart_message),
      );
  }

  public increaseItemQuantity(id: number): Observable<string> {
    return this._http
      .patch<DecreaseCartItemResponse>(BACKEND_API.concat(`/carts/items/${id}/decrease`), undefined, {
        headers: this._DEFAULT_HEADERS,
      })
      .pipe(
        catchError(CartHttpError.handler),
        map(({ response }) => response.response.cart_message),
      );
  }

  public emptyCart(): Observable<string> {
    return this._http
      .delete<DecreaseCartItemResponse>(BACKEND_API.concat("/carts/empty-cart"), { headers: this._DEFAULT_HEADERS })
      .pipe(
        catchError(CartHttpError.handler),
        map(({ response }) => response.response.cart_message),
      );
  }
}
