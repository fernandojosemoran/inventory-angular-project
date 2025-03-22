import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-users-icon',
  templateUrl: './users-icon.component.svg',
  imports: [],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersIconComponent {
  public width: InputSignal<string> = input<string>("30");
  public height: InputSignal<string> = input<string>("30");
  public fill: InputSignal<string> = input<string>("#eeee");
}
