import { Category } from "@/app/categories/interfaces/category.interface";

export interface ICategoryProvider {
  addCategory(category: Category): Category[];
  updateCategory(category: Category): Category[];
  deleteCategory(id: number): boolean;
  searchCategory(name: string): Category[];
}
