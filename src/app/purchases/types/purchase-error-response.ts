export type PurchaseErrorResponse = {
  response: {
    status: string;
    errors: PurchaseErrorListResponse;
  };
  status: string;
};

export type PurchaseErrorListResponse = {
  privider?: string;
  totalPrice?: string;
  discount?: string;
  cartItems?: string;
  cartProducts?: string;
};
