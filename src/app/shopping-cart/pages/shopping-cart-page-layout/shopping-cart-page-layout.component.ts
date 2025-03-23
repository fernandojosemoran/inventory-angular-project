import { Component } from '@angular/core';
import { ActionsBarComponent } from "../../../shared/components/actions-bar/actions-bar.component";

@Component({
  selector: 'app-shopping-card-layout',
  standalone: true,
  imports: [ ActionsBarComponent ],
  templateUrl: './shopping-cart-page-layout.component.html',
  styleUrl: './shopping-cart-page-layout.component.css'
})
export class ShoppingCardPageLayoutComponent {

}
