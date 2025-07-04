import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, catchError, map, of } from "rxjs";
import { ICategoryService } from "../interfaces/category.service.interface";

import AuthHttpError from "@/app/auth/errors/auth-http-error";
import { environments } from "@/environments/environments";
import CategoryHttpError from "../errors/category-http-error";
import { CategoriesResponse, Category, CategoryResponse } from "../interfaces/category.interface";

// hidden dependencies
const BACKEND_API: string = environments.backendApi;

@Injectable({ providedIn: "root" })
export class CategoryService implements ICategoryService {
  private readonly _http: HttpClient = inject(HttpClient);

  public getAllCategories(): Observable<Category[]> {
    return this._http.get<CategoriesResponse>(`${BACKEND_API}/categories`).pipe(
      catchError(CategoryHttpError.handler),
      map((response) => response.response),
    );
  }

  public createCategory(category: Category): Observable<Category> {
    return this._http.post<CategoryResponse>(`${BACKEND_API}/categories`, category).pipe(
      catchError(CategoryHttpError.handler),
      map((response) => response.response),
    );
  }

  public getCategory(id: string): Observable<Category> {
    return this._http.get<CategoryResponse>(`${BACKEND_API}/categories/${id}`).pipe(
      catchError(CategoryHttpError.handler),
      map((response) => response.response),
    );
  }

  public deleteCategory(id: string): Observable<boolean> {
    return this._http.delete(`${BACKEND_API}/categories/${id}`, { observe: "response" }).pipe(
      catchError(CategoryHttpError.handler),
      map((res) => res.ok),
    );
  }

  public updateCategory(category: Category): Observable<Category> {
    return this._http.put<CategoryResponse>(`${BACKEND_API}/categories/${category.id}`, category).pipe(
      catchError(CategoryHttpError.handler),
      map((response) => response.response),
    );
  }

  public searchCategory(name: string): Observable<Category[]> {
    return this._http.get<CategoriesResponse>(`${BACKEND_API}/categories/search/${name}`).pipe(
      catchError(CategoryHttpError.handler),
      map((response) => response.response),
    );
  }
}
