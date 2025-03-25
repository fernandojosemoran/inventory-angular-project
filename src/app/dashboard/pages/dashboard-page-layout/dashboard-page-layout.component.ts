import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-page-layout',
  templateUrl: './dashboard-page-layout.component.html',
  styleUrl: './dashboard-page-layout.component.css',
  imports: [
    SideBarComponent,
    RouterOutlet,
    CommonModule
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPageLayoutComponent { }
