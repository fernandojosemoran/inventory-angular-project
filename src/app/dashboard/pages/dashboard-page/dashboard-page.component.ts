import { ActionsBarComponent } from "@/app/shared/components/actions-bar/actions-bar.component";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard-page.component.html",
  styleUrl: "./dashboard-page.component.css",
  imports: [ ActionsBarComponent ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashBoardComponent {

}
