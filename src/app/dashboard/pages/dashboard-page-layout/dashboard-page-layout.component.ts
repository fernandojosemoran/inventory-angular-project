import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';

@Component({
  selector: 'app-dashboard-page-layout',
  templateUrl: './dashboard-page-layout.component.html',
  styleUrl: './dashboard-page-layout.component.css',
  imports: [
    SideBarComponent
],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPageLayoutComponent {

}
