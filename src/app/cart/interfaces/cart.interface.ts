import { Observable } from "rxjs";
import { Cart } from "../types/cart.api";

export interface ICartService {
  deleteCart(id: string): Observable<boolean>;
  addProductToCart(cart: { item_id: number, quantity: number }): Observable<boolean>;
  getAllCarts(): Observable<Cart[]>;
}
