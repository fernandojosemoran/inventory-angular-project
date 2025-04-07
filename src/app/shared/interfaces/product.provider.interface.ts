import { Product } from "@/app/products/interfaces/product.interface";

export interface IProductProvider {
  getProductByPage(page: number): Product[];
  getOneProduct(id: number): Product | undefined;
  searchProducts(name: string): Product[];
}

export interface Pagination {
  currentPage: number;
  totalPages:  number;
  pageSize:    number;
}
