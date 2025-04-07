export interface ProductResponse {
  response: ProductResponseSkeleton,
  status: string;
}

export interface ProductResponseSkeleton {
  content:     Product[] | Product;
  currentPage: number;
  totalPages:  number;
  pageSize:    number;
}

export interface Product {
  id:           number;
  code:         string;
  name:         string;
  imageUrl:     string;
  stock:        number;
  cost:         number;
  price:        number;
  categoryName: CategoryName;
  available:    boolean;
  createdAt:    Date;
  updatedAt:    Date;
}

export enum CategoryName {
  RepuestosDeMotor = "Repuestos de Motor",
}
