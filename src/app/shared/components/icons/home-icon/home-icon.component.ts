import { ChangeDetectionStrategy, Component, input, InputSignal } from "@angular/core";

@Component({
  selector: "app-home-icon",
  templateUrl: "./home-icon.component.svg",
  imports: [],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeIconComponent {
  public width: InputSignal<string> = input<string>("30");
  public height: InputSignal<string> = input<string>("30");
  public fill: InputSignal<string> = input<string>("#eeee");
}
