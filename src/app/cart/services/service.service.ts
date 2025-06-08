import { environments } from "@/environments/environments";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, catchError, map, of } from "rxjs";
import { AddServiceResponse } from "../types/cart.api";

const BACKEND_API: string = environments.backendApi;

@Injectable({ providedIn: "root" })
export class CartService {
  private readonly http: HttpClient = inject(HttpClient);

  public addService(product: {
    itemId: number;
    quantity: number;
  }): Observable<boolean> {
    return this.http.post<AddServiceResponse>(`${BACKEND_API}/carts/add-service`, product).pipe(
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
