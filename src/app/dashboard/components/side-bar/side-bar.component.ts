import { ChangeDetectionStrategy, Component, computed, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SimLogoIconComponent } from '@/app/shared/components/icons/sim-logo-icon/sim-logo-icon.component';
import { LayerGroupIconComponent } from '@/app/shared/components/icons/layer-group-icon/layer-group-icon.component';
import { TruckRampBoxIconComponent } from '@/app/shared/components/icons/truck-ramp-box-icon/truck-ramp-box-icon-component';
import { MoneyCheckDollarIconComponent } from '@/app/shared/components/icons/money-check-dollar-icon/money-check-dollar-icon.component';
import { HandshakeIconComponent } from '@/app/shared/components/icons/handshake-icon/handshake-icon.component';
import { BookIconComponent } from '@/app/shared/components/icons/book-icon/book-icon.component';
import { CartArrowDownIconComponent } from '@/app/shared/components/icons/cart-arrow-down-icon/cart-arrow-down-icon.component';
import { UsersIconComponent } from '@/app/shared/components/icons/users-icon/users-icon.component';

interface ListPath {
  path: string;
  activate: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
}

@Component({
  selector: 'app-dashboard-side-bar',
  standalone: true,
  imports: [
    SimLogoIconComponent,
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: "./side-bar.component.html",
  styleUrl: './side-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent {
  public listPath: Signal<ListPath[]> = computed<ListPath[]>(() => [
    {
      path: "categories",
      activate: "--activate-sidebar-link",
      name: "Categories",
      icon: LayerGroupIconComponent
    },
    {
      path: "products",
      activate: "--activate-sidebar-link",
      name: "Products",
      icon: TruckRampBoxIconComponent
    },
    {
      path: "purchases",
      activate: "--activate-sidebar-link",
      name: "Purchases",
      icon: MoneyCheckDollarIconComponent
    },
    {
      path: "sales",
      activate: "--activate-sidebar-link",
      name: "Sales",
      icon: HandshakeIconComponent
    },
    {
      path: "reports",
      activate: "--activate-sidebar-link",
      name: "Reports",
      icon: BookIconComponent
    },
    {
      path: "shopping-cart",
      activate: "--activate-sidebar-link",
      name: "Shopping Cart",
      icon: CartArrowDownIconComponent
    },
    {
      path: "users",
      activate: "--activate-sidebar-link",
      name: "Users",
      icon: UsersIconComponent
    }
  ]);
}


// {
//   path: "home",
//   activate: "--activate-sidebar-link",
//   name: "Dashboard",
//   icon: HomeIconComponent
// },
