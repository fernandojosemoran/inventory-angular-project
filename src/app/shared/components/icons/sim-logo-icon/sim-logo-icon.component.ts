import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-sim-logo-icon',
  standalone: true,
  imports: [],
  templateUrl: "./sim-logo-icon.component.svg",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimLogoIconComponent {
  public width: InputSignal<string> = input<string>("100");
  public height: InputSignal<string> = input<string>("100");
  public fill: InputSignal<string> = input<string>("#eeee");
  public class: InputSignal<string> = input<string>("looka-1j8o68f");
}
