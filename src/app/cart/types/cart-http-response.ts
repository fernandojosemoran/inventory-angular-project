import { CartItem } from "./cart";
import { CartItemStatus } from "./cart-Item-status";

export type GetCartCount = {
  status: string;
  response: number;
};

export type CreateCartItemResponse = {
  status: string;
  response: {
    id: number;
    status: CartItemStatus;
    grandTotal: number;
    cartItems: CartItem[];
    empty: boolean;
    totalItemsCount: number;
  };
};

export type GetActiveCartsResponse = {
  status: string;
  response: {
    id: number;
    status: string;
    grandTotal: number;
    cartItems: CartItem[];
    empty: boolean;
    totalItemsCount: number;
  };
};

export type IncreaseCartItemResponse = {
  status: string;
  response: {
    cart_message: string;
  };
};

export type DecreaseCartItemResponse = {
  status: string;
  response: {
    status: string;
    response: {
      cart_message: string;
    };
  };
};

export type AddProductToCartItemResponse = {
  status: string;
  response: {
    status: string;
    response: {
      cart_message: string;
    };
  };
};

export type DeleteCartResponse = {
  status: string;
  response: {
    status: string;
    response: {
      cart_message: string;
    };
  };
};

export type DeleteCartItemResponse = {
  status: string;
  response: {
    status: string;
    response: {
      cart_message: string;
    };
  };
};
