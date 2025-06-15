import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SideBarComponent } from "../../components/side-bar/side-bar.component";

@Component({
  selector: "app-dashboard-page-layout",
  templateUrl: "./dashboard-page-layout.component.html",
  styleUrl: "./dashboard-page-layout.component.css",
  imports: [SideBarComponent, RouterOutlet, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageLayoutComponent {}
