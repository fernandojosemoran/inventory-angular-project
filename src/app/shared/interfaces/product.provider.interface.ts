import { Product } from "@/app/products/interfaces/product.interface";

export interface IProductProvider {
  getProducts(): Product[];
  getOneProduct(id: number): Product | undefined;
  searchProducts(name: string): Product[];
}
