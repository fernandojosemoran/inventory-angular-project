import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ActionsBarComponent } from "../../../shared/components/actions-bar/actions-bar.component";
import { HorizontalCardComponent } from "../../../shared/components/horizontal-card/horizontal-card.component";
import { CategoryService } from '../../services/categories.service';
import { CategoryProvider } from '@/app/shared/provider/categories.provider.service';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'app-category-page-layout',
  standalone: true,
  imports: [ ActionsBarComponent, HorizontalCardComponent ],
  templateUrl: './category-page-layout.component.html',
  styleUrl: './category-page-layout.component.css'
})
export class CategoryPageLayoutComponent implements OnInit{
  public categoryService: CategoryService = inject(CategoryService);
  public categoryProvider: CategoryProvider = inject(CategoryProvider);

  public categoriesList: WritableSignal<Category[]> = signal<Category[]>([]);

  public categoryLoaderFlag: WritableSignal<boolean> = signal<boolean>(false);

  public ngOnInit(): void {
      const categories: Category[] = this.categoryProvider.getCategories();

      if (!categories) return;

      this.categoriesList.set(categories);
  }
}
