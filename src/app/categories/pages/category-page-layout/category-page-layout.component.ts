import { CategoryProvider } from "@/app/shared/provider/categories.provider.service";
import { CommonModule } from "@angular/common";
import { Component, OnInit, WritableSignal, inject, signal } from "@angular/core";
import { ActionsBarComponent } from "../../../shared/components/actions-bar/actions-bar.component";
import { HorizontalCardComponent } from "../../../shared/components/horizontal-card/horizontal-card.component";
import { CreateCategoryDialogComponent } from "../../components/create-category-dialog/create-category-dialog.component";
import { Category } from "../../interfaces/category.interface";
import { CategoryService } from "../../services/categories.service";
import GlobalAlertProvider from "@/app/shared/provider/global-alert.provider.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-category-page-layout",
  imports: [ActionsBarComponent, HorizontalCardComponent, CommonModule, CreateCategoryDialogComponent],
  templateUrl: "./category-page-layout.component.html",
  styleUrl: "./category-page-layout.component.css",
})
export class CategoryPageLayoutComponent implements OnInit {
  private readonly _categoryService: CategoryService = inject(CategoryService);
  private readonly _categoryProvider: CategoryProvider = inject(CategoryProvider);
  private readonly _globalAlertProvider: GlobalAlertProvider = inject(GlobalAlertProvider);

  public categoriesList: WritableSignal<Category[]> = signal<Category[]>([]);

  public categoryLoaderFlag: WritableSignal<boolean> = signal<boolean>(false);
  public createCategoryModalFlag: WritableSignal<boolean> = signal<boolean>(false);

  public ngOnInit(): void {
    const categories$: Observable<Category[]> = this._categoryProvider.getAllCategories;

    categories$.subscribe({
      error: (errro): void => this._globalAlertProvider.showAlert(errro),
      next: (categoriesList): void => categoriesList && this.categoriesList.set(categoriesList),
    });
  }

  public openDialog(): void {
    this.createCategoryModalFlag.set(true);
  }

  public createNewCategory(category: Category): void {
    this._categoryService.createCategory(category).subscribe({
      error: (error): void => this._globalAlertProvider.showAlert(error),
      next: (response): void => this.categoriesList.set(this._categoryProvider.addCategory(response)),
    });
    this.createCategoryModalFlag.set(false);
  }

  public closeDialog(isClose: boolean): void {
    this.createCategoryModalFlag.set(isClose);
  }

  public searchCategory(term: string): void {
    if (!term) {
      this._categoryProvider.getAllCategories.subscribe({
        error: (error): void => this._globalAlertProvider.showAlert(error),
        next: (categories: Category[]): void => this.categoriesList.set(categories),
      });
    }

    this.categoriesList.set(this._categoryProvider.searchCategory(term));
  }
}
