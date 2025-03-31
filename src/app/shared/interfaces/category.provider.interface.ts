import { Category } from "@/app/categories/interfaces/category.interface";

export interface ICategoryProvider {
  getCategories(): Category[];
  createCategory(category: Category): Category;
  updateCategory(category: Category): Category;
  deleteCategory(id: number): boolean;
  searchCategory(name: string): Category[];
}
