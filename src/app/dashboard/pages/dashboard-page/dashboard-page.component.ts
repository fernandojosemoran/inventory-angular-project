import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ActionsBarComponent } from "../../components/actions-bar/actions-bar.component";

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
