import { Product } from "@/app/products/interfaces/product.interface";

export type CartItem = {
  id: number;
  quantity: number;
  unitPrice: number;
  product: Product;
  subTotal: number;
};
