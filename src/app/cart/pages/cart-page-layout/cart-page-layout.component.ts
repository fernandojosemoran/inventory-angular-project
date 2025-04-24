import { Component } from '@angular/core';
import { ActionsBarComponent } from "../../../shared/components/actions-bar/actions-bar.component";

@Component({
  selector: 'app-cart-layout',
  standalone: true,
  imports: [ ActionsBarComponent ],
  templateUrl: './cart-page-layout.component.html',
  styleUrl: './cart-page-layout.component.css'
})
export class CartPageLayoutComponent {

}
