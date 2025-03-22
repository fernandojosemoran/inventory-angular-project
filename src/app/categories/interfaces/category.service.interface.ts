

import { Observable } from "rxjs";
import { Category } from "./category.interface";

export interface ICategoryService {
  getAllCategories(): Observable<Category[]>;
  getCategory(id: string): Observable<Category>;
  deleteCategory(id: string): Observable<boolean>;
  createCategory(category: Category): Observable<Category>;
  updateCategory(category: Category): Observable<Category>;
}

