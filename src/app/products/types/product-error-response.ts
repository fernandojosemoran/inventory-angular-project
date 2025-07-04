export type ProductErrorResponse = {
  response: {
    status: string;
    errors: ProductErrorListResponse;
  };
  status: string;
};

export type ProductErrorListResponse = {
  code?: string;
  imageUrl?: string;
  name?: string;
  file?: string;
  stock?: string;
  cost?: string;
  price?: string;
  categoryId?: string;
};
