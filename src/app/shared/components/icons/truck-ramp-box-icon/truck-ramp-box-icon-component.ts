import { ChangeDetectionStrategy, Component, input, InputSignal } from "@angular/core";

@Component({
  selector: "app-truck-ramp-box-icon",
  templateUrl: "./truck-ramp-box-icon.component.svg",
  imports: [],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TruckRampBoxIconComponent {
  public width: InputSignal<string> = input<string>("30");
  public height: InputSignal<string> = input<string>("30");
  public fill: InputSignal<string> = input<string>("#eee");
}
