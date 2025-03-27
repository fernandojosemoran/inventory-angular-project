import { ChangeDetectionStrategy, Component } from '@angular/core';
// import { RegisterPageComponent } from "../register-page/register-page.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {}
