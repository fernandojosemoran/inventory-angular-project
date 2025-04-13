import { inject, Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ICategoryService } from "../interfaces/category.service.interface";

import { Category, CategoriesResponse, CategoryResponse } from "../interfaces/category.interface";
import { environments } from "@/environments/environments";

// hidden dependencies
const BACKEND_API: string = environments.backendApi;


@Injectable({ providedIn: "root" })
export class CategoryService implements ICategoryService {

  private readonly _http: HttpClient = inject(HttpClient);

  public getAllCategories(): Observable<Category[]> {
    return this._http.get<CategoriesResponse>(`${BACKEND_API}/categories`).pipe(map(response => response.response));
  }

  public createCategory(category: Category): Observable<Category> {
    return this._http.post<CategoryResponse>(`${BACKEND_API}/categories`, category)
    .pipe(
      catchError((error) => {
        console.error(error);
        return of();
      }),
      map(response => response.response)
    );
  }

  public getCategory(id: string): Observable<Category> {
    return this._http.get<CategoryResponse>(`${BACKEND_API}/categories/${id}`).pipe(map(response => response.response));
  }

  public deleteCategory(id: string): Observable<boolean> {
    return this._http.delete(`${BACKEND_API}/categories/${id}`, { observe: 'response' }).pipe(map((res) => res.ok));
  }

  public updateCategory(category: Category): Observable<Category> {
    return this._http.put<CategoryResponse>(`${BACKEND_API}/categories/${category.id}`, category).pipe(map(response => response.response));
  }

  public searchCategory(name: string): Observable<Category[]> {
    return this._http.get<CategoriesResponse>(`${BACKEND_API}/categories/search/${name}`).pipe(map(response => response.response));
  }
}
