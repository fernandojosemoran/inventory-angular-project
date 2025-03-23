import { Component } from '@angular/core';
import { ActionsBarComponent } from "../../../shared/components/actions-bar/actions-bar.component";

@Component({
  selector: 'app-category-page-layout',
  standalone: true,
  imports: [ ActionsBarComponent ],
  templateUrl: './category-page-layout.component.html',
  styleUrl: './category-page-layout.component.css'
})
export class CategoryPageLayoutComponent {

}
