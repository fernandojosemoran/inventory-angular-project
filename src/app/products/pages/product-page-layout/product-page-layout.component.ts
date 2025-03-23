import { Component } from '@angular/core';
import { ActionsBarComponent } from "../../../shared/components/actions-bar/actions-bar.component";

@Component({
  selector: 'app-product-page-layout',
  standalone: true,
  imports: [ ActionsBarComponent ],
  templateUrl: './product-page-layout.component.html',
  styleUrl: './product-page-layout.component.css'
})
export class ProductPageLayoutComponent {

}
