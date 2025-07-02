import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, catchError, map, of } from "rxjs";
import { ICategoryService } from "../interfaces/category.service.interface";

import { environments } from "@/environments/environments";
import { CategoriesResponse, Category, CategoryResponse } from "../interfaces/category.interface";
import HttpError from "@/app/shared/errors/http-error";

// hidden dependencies
const BACKEND_API: string = environments.backendApi;

@Injectable({ providedIn: "root" })
export class CategoryService implements ICategoryService {
  private readonly _http: HttpClient = inject(HttpClient);

  public getAllCategories(): Observable<Category[]> {
    return this._http.get<CategoriesResponse>(`${BACKEND_API}/categories`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return HttpError.handler(error.message, error.status);
      }),
      map((response) => response.response),
    );
  }

  public createCategory(category: Category): Observable<Category> {
    return this._http.post<CategoryResponse>(`${BACKEND_API}/categories`, category).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return HttpError.handler(error.message, error.status);
      }),
      map((response) => response.response),
    );
  }

  public getCategory(id: string): Observable<Category> {
    return this._http.get<CategoryResponse>(`${BACKEND_API}/categories/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return HttpError.handler(error.message, error.status);
      }),
      map((response) => response.response),
    );
  }

  public deleteCategory(id: string): Observable<boolean> {
    return this._http.delete(`${BACKEND_API}/categories/${id}`, { observe: "response" }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return HttpError.handler(error.message, error.status);
      }),
      map((res) => res.ok),
    );
  }

  public updateCategory(category: Category): Observable<Category> {
    return this._http.put<CategoryResponse>(`${BACKEND_API}/categories/${category.id}`, category).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return HttpError.handler(error.message, error.status);
      }),
      map((response) => response.response),
    );
  }

  public searchCategory(name: string): Observable<Category[]> {
    return this._http.get<CategoriesResponse>(`${BACKEND_API}/categories/search/${name}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return HttpError.handler(error.message, error.status);
      }),
      map((response) => response.response),
    );
  }
}
