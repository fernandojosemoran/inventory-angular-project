import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Signal, computed } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

import { BookIconComponent } from "@/app/shared/components/icons/book-icon/book-icon.component";
import { CartArrowDownIconComponent } from "@/app/shared/components/icons/cart-arrow-down-icon/cart-arrow-down-icon.component";
import { HandshakeIconComponent } from "@/app/shared/components/icons/handshake-icon/handshake-icon.component";
import { LayerGroupIconComponent } from "@/app/shared/components/icons/layer-group-icon/layer-group-icon.component";
import { MoneyCheckDollarIconComponent } from "@/app/shared/components/icons/money-check-dollar-icon/money-check-dollar-icon.component";
import { SimLogoIconComponent } from "@/app/shared/components/icons/sim-logo-icon/sim-logo-icon.component";
import { TruckRampBoxIconComponent } from "@/app/shared/components/icons/truck-ramp-box-icon/truck-ramp-box-icon-component";
import { UsersIconComponent } from "@/app/shared/components/icons/users-icon/users-icon.component";

interface ListPath {
  path: string;
  activate: string;
  name: string;

  icon: any;
  inputs: {
    width: number;
    height: number;
  };
}

@Component({
  selector: "app-dashboard-side-bar",
  standalone: true,
  imports: [CommonModule, SimLogoIconComponent, RouterLink, RouterLinkActive],
  templateUrl: "./side-bar.component.html",
  styleUrl: "./side-bar.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent {
  public listPath: Signal<ListPath[]> = computed<ListPath[]>(() => [
    {
      path: "categories",
      activate: "--activate-sidebar-link",
      name: "Categories",
      icon: LayerGroupIconComponent,
      inputs: { width: 25, height: 25 },
    },
    {
      path: "products",
      activate: "--activate-sidebar-link",
      name: "Products",
      icon: TruckRampBoxIconComponent,
      inputs: { width: 25, height: 25 },
    },
    {
      path: "purchases",
      activate: "--activate-sidebar-link",
      name: "Purchases",
      icon: MoneyCheckDollarIconComponent,
      inputs: { width: 25, height: 25 },
    },
    {
      path: "sales",
      activate: "--activate-sidebar-link",
      name: "Sales",
      icon: HandshakeIconComponent,
      inputs: { width: 25, height: 25 },
    },
    {
      path: "reports",
      activate: "--activate-sidebar-link",
      name: "Reports",
      icon: BookIconComponent,
      inputs: { width: 25, height: 25 },
    },
    {
      path: "shopping-cart",
      activate: "--activate-sidebar-link",
      name: "Shopping Cart",
      icon: CartArrowDownIconComponent,
      inputs: { width: 25, height: 25 },
    },
    {
      path: "users",
      activate: "--activate-sidebar-link",
      name: "Users",
      icon: UsersIconComponent,
      inputs: { width: 25, height: 25 },
    },
  ]);
}
