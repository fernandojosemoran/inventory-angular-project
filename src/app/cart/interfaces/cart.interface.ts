import { Observable } from "rxjs";
import { CartItem } from "../types/cart";
import { AddProductToCartParams } from "../types/cart-params";

export interface ICartService {
  deleteCartItem(id: number): Observable<string>;
  addProductToCart(cart: AddProductToCartParams): Observable<string>;
  increaseItemQuantity(id: number): Observable<string>;
  decreaseItemQuantity(id: number): Observable<string>;
  getAllCarts(): Observable<CartItem[]>;
  getActiveCartItemCount(): Observable<number>;
  emptyCart(): Observable<string>;
  getCurrentActiveCartItem(): Observable<number>;
}
