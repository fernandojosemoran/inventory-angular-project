import { Product } from "@/app/products/interfaces/product.interface";
import { Observable } from "rxjs";

export interface PurchaseResponse {
  status: string;
  response: Purchase[] | string | boolean;
}

export type Purchase = {
  id: number;
  provider: string;
  count: number;
  totalPrice: number;
  discount: number;
  cartItems: Product[];
  updatedAt?: Date;
  createdAt?: Date;
};

export interface IPurchaseService {
  createPurchase(purchase: Purchase): Observable<PurchaseResponse>;
  updatePurchase(purchase: Purchase): Observable<PurchaseResponse>;
  deletePurchase(id: number): void;
  getPurchaseById(id: number): Observable<PurchaseResponse>;
  searchPurchase(term: string): Observable<PurchaseResponse>;
  getAll(): Observable<Purchase[]>;
}
