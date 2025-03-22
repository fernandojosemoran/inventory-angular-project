import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SimLogoIconComponent } from '../../../shared/components/icons/sim-logo-icon/sim-logo-icon.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface ListPath {
  path: string;
  activate: string;
  name: string;
}

@Component({
  selector: 'app-dashboard-side-bar',
  standalone: true,
  imports: [
    SimLogoIconComponent,
    RouterLink,
    RouterLinkActive,
    CommonModule,
  ],
  templateUrl: "./side-bar.component.html",
  styleUrl: './side-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent {
  public listPath: ListPath[] = [
    {
      path: "categories",
      activate: "--activate-sidebar-link",
      name: "Categories"
    },
    {
      path: "products",
      activate: "--activate-sidebar-link",
      name: "Products"
    },
    {
      path: "purchases",
      activate: "--activate-sidebar-link",
      name: "Purchases"
    },
    {
      path: "sales",
      activate: "--activate-sidebar-link",
      name: "Sales"
    },
    {
      path: "reports",
      activate: "--activate-sidebar-link",
      name: "Reports"
    },
    {
      path: "shopping-cart",
      activate: "--activate-sidebar-link",
      name: "Shopping Cart"
    },
    {
      path: "user",
      activate: "--activate-sidebar-link",
      name: "Users"
    }
  ];
}
