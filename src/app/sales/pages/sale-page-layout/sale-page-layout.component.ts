import { Component } from '@angular/core';
import { ActionsBarComponent } from "../../../shared/components/actions-bar/actions-bar.component";

@Component({
  selector: 'app-sale-page-layout',
  standalone: true,
  imports: [ ActionsBarComponent ],
  templateUrl: './sale-page-layout.component.html',
  styleUrl: './sale-page-layout.component.css'
})
export class SalePageLayoutComponent {

}
