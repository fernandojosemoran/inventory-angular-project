export type CartErrorResponse = {
  status: string;
  response: {
    errors: CartErrorListResponse;
    status: number;
    timestamp: Date;
  };
};

// "status": "failed",
// "response": {
//     "message": "Cart is already empty.",
//     "timestamp": "2025-07-05",
//     "status": 404
// }

export type CartErrorListResponse = {
  itemId?: string;
  quantity?: string;
  cartMessage?: string;
};
