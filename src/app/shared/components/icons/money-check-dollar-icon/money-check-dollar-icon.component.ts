import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  input,
} from "@angular/core";

@Component({
  selector: "app-money-check-dollar-icon",
  templateUrl: "./money-check-dollar-icon.component.svg",
  imports: [],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoneyCheckDollarIconComponent {
  public width: InputSignal<string> = input<string>("30");
  public height: InputSignal<string> = input<string>("30");
  public fill: InputSignal<string> = input<string>("#eeee");
}
