import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { ICategoryProvider } from '../interfaces/category.provider.interface';
import { Category } from '@/app/categories/interfaces/category.interface';
import { CategoryService } from '@/app/categories/services/categories.service';

@Injectable({ providedIn: 'root' })
export class CategoryProvider implements ICategoryProvider {
  private readonly categoriesService: CategoryService = inject(CategoryService);

  public readonly categories: WritableSignal<Category[]> = signal<Category[]>([]);

  public constructor() {
    this.categoriesService.getAllCategories()
    .subscribe(response => this.categories.set(response));
  }

  public addCategory(category: Category): Category[] {
    this.categories.update(oldCategories => [ ...oldCategories, category ]);
    return this.categories();
  }

  public updateCategory(category: Category): Category[] {
    this.categories().map(ctg => {
      if (ctg.id === category.id) return category;
      return ctg;
    });

    return this.categories();
  }

  public deleteCategory(id: number): boolean {
    this.categories().map(ctg => {
      if (ctg.id === id) return;
      return ctg;
    });
    return true;
  }

  public searchCategory(name: string): Category[] {
    return this.categories().filter(ctg => ctg.name.trim().toLowerCase().startsWith(name));
  }
}
