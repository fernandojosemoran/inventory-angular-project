import { environments } from "@/environments/environments";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, catchError, map, of } from "rxjs";
import { ICartService } from "../interfaces/cart.interface";
import {
  Cart,
  DeleteCartResponse,
  GetAllCartsResponse,
} from "../types/cart.api";
import {
  AddProductToCartResponse,
  DecreaseItemQuantityResponse,
} from "./../types/cart.api";

const BACKEND_API: string = environments.backendApi;

@Injectable({ providedIn: "root" })
export class CartService implements ICartService {
  private readonly http: HttpClient = inject(HttpClient);

  public deleteCart(id: string): Observable<boolean> {
    return this.http
      .delete<DeleteCartResponse>(`${BACKEND_API}/carts/items/${id}`)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.error(err);
          return of(err.message);
        }),
        map((response) => {
          if (typeof response === "string") return false;

          return response.cartMessage ? true : false;
        }),
      );
  }

  // TODO: Should return a cart not a boolean
  public addProductToCart(product: {
    item_id: number;
    quantity: number;
  }): Observable<boolean> {
    return this.http
      .post<AddProductToCartResponse>(
        `${BACKEND_API}/carts/add-product`,
        undefined,
        { params: { ...product } },
      )
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.error(err);
          return of(err.message);
        }),
        map((response) => {
          if (typeof response === "string") return false;

          return response.cartMessage ? true : false;
        }),
      );
  }

  public getAllCarts(): Observable<Cart[]> {
    return this.http.get<GetAllCartsResponse>(`${BACKEND_API}/carts`).pipe(
      catchError((err: HttpErrorResponse) => {
        console.error(err);
        return of(err.message);
      }),
      map((response) => {
        if (typeof response === "string") return [];

        return response.carts;
      }),
    );
  }

  // TODO: Check out this method, functionality is not compressible
  public decreaseItemQuantity(id: number): Observable<boolean> {
    return this.http
      .patch<DecreaseItemQuantityResponse>(
        `${BACKEND_API}/items/${id}/decrease"`,
        undefined,
      )
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.error(err);
          return of(err.message);
        }),
        map((response) => {
          if (typeof response === "string") return false;

          return response.cartMessage ? true : false;
        }),
      );
  }

  // TODO: Check out this method, functionality is not compressible
  public increaseItemQuantity(id: number): Observable<boolean> {
    return this.http
      .patch<DecreaseItemQuantityResponse>(
        `${BACKEND_API}/items/${id}/decrease"`,
        undefined,
      )
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.error(err);
          return of(err.message);
        }),
        map((response) => {
          if (typeof response === "string") return false;

          return response.cartMessage ? true : false;
        }),
      );
  }
}
