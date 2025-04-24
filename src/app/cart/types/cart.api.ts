export type Cart  = {
  id: number;
  product: string;
  quantity: number;
  type: string;
  subtotal: number;
}

export type DeleteCartResponse = {
  cartMessage: string;
}

export type GetAllCartsResponse = {
  carts: Cart[]
}

export type AddProductToCartResponse = {
  cartMessage: string;
}

export type DecreaseItemQuantityResponse = {
  cartMessage: string;
}

export type AddServiceResponse = {
  cartMessage: string;
}
