interface ProductSkeleton {
  message: string;
}

export interface ProductListResponse extends ProductSkeleton {
  response: Product[]
}

export interface ProductResponse extends ProductSkeleton {
  response: Product
}

export interface Product {
  id:           number;
  code:         string;
  name:         string;
  imageUrl:     string;
  stock:        number;
  cost:         number;
  price:        number;
  categoryName: string;
  available:    boolean;
  createdAt:    Date;
  updatedAt:    Date;
}
