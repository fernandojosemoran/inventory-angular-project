import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-page-layout',
  templateUrl: './dashboard-page-layout.component.html',
  styleUrl: './dashboard-page-layout.component.css',
  imports: [
    SideBarComponent,
    RouterOutlet
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPageLayoutComponent {

}
