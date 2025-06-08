import { CategoryProvider } from "@/app/shared/provider/categories.provider.service";
import { CommonModule } from "@angular/common";
import {
  Component,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from "@angular/core";
import { ActionsBarComponent } from "../../../shared/components/actions-bar/actions-bar.component";
import { HorizontalCardComponent } from "../../../shared/components/horizontal-card/horizontal-card.component";
import { CreateCategoryDialogComponent } from "../../components/create-category-dialog/create-category-dialog.component";
import { Category } from "../../interfaces/category.interface";
import { CategoryService } from "../../services/categories.service";

@Component({
  selector: "app-category-page-layout",
  standalone: true,
  imports: [
    ActionsBarComponent,
    HorizontalCardComponent,
    CommonModule,
    CreateCategoryDialogComponent,
  ],
  templateUrl: "./category-page-layout.component.html",
  styleUrl: "./category-page-layout.component.css",
})
export class CategoryPageLayoutComponent implements OnInit {
  public categoryService: CategoryService = inject(CategoryService);
  public categoryProvider: CategoryProvider = inject(CategoryProvider);

  public categoriesList: WritableSignal<Category[]> = signal<Category[]>([]);

  public categoryLoaderFlag: WritableSignal<boolean> = signal<boolean>(false);
  public createCategoryModalFlag: WritableSignal<boolean> =
    signal<boolean>(false);

  public ngOnInit(): void {
    const categories: Category[] = this.categoryProvider.categories();

    if (!categories) return;

    this.categoriesList.set(categories);
  }

  public openDialog() {
    this.createCategoryModalFlag.set(true);
  }

  public createNewCategory(category: Category) {
    this.categoryService
      .createCategory(category)
      .subscribe((response) =>
        this.categoriesList.set(this.categoryProvider.addCategory(response)),
      );
    this.createCategoryModalFlag.set(false);
  }

  public closeDialog(isClose: boolean) {
    this.createCategoryModalFlag.set(isClose);
  }

  public searchCategory(term: string) {
    if (!term)
      return this.categoriesList.set(this.categoryProvider.categories());

    this.categoriesList.set(this.categoryProvider.searchCategory(term));
  }
}
