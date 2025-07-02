import { Category } from "@/app/categories/interfaces/category.interface";
import { CategoryService } from "@/app/categories/services/categories.service";
import { Injectable, WritableSignal, inject, signal } from "@angular/core";
import { ICategoryProvider } from "../interfaces/category.provider.interface";
import { Observable, of, tap } from "rxjs";

@Injectable({ providedIn: "root" })
export class CategoryProvider implements ICategoryProvider {
  private readonly categoriesService: CategoryService = inject(CategoryService);

  private readonly categories: WritableSignal<Category[]> = signal<Category[]>([]);

  public get getAllCategories(): Observable<Category[]> {
    if (this.categories().length === 0) {
      return this.categoriesService.getAllCategories().pipe(tap((response) => this.categories.set(response)));
    }

    return of(this.categories());
  }

  public addCategory(category: Category): Category[] {
    this.categories.update((oldCategories) => [...oldCategories, category]);
    return this.categories();
  }

  public updateCategory(category: Category): Category[] {
    this.categories().map((ctg) => {
      if (ctg.id === category.id) return category;
      return ctg;
    });

    return this.categories();
  }

  public deleteCategory(id: number): boolean {
    this.categories().map((ctg) => {
      if (ctg.id === id) return;
      return ctg;
    });
    return true;
  }

  public searchCategory(name: string): Category[] {
    return this.categories().filter((ctg) => ctg.name.trim().toLowerCase().startsWith(name));
  }
}
