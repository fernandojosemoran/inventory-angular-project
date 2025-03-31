import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { ICategoryProvider } from '../interfaces/category.provider.interface';
import { Category } from '@/app/categories/interfaces/category.interface';
import { CategoryService } from '@/app/categories/services/categories.service';

@Injectable({ providedIn: 'root' })
export class CategoryProvider implements ICategoryProvider {
  private readonly categoriesService: CategoryService = inject(CategoryService);

  public categories: WritableSignal<Category[]> = signal<Category[]>([]);

  public constructor() {
    this.categoriesService.getAllCategories()
    .subscribe(response => this.categories.set(response));
  }

  public getCategories(): Category[] {
    return this.categories();
  }

  public createCategory(category: Category): Category {
    throw new Error('Method not implemented.');
  }

  public updateCategory(category: Category): Category {
    throw new Error('Method not implemented.');
  }

  public deleteCategory(id: number): boolean {
    throw new Error('Method not implemented.');
  }

  public searchCategory(name: string): Category[] {
    throw new Error('Method not implemented.');
  }
}
