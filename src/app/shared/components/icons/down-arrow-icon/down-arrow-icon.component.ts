import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-down-arrow-icon',
  standalone: true,
  imports: [],
  templateUrl: "./down-arrow-icon.component.svg",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownArrowIconComponent {
  public width: InputSignal<string> = input<string>("30");
  public height: InputSignal<string> = input<string>("30");
  public fill: InputSignal<string> = input<string>("#eeee");
}
