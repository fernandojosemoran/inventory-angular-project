import { ChangeDetectionStrategy, Component, InputSignal, input } from "@angular/core";

@Component({
  selector: "app-cart-arrow-down-icon",
  templateUrl: "./cart-arrow-down-icon.component.svg",
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartArrowDownIconComponent {
  public width: InputSignal<string> = input<string>("30");
  public height: InputSignal<string> = input<string>("30");
  public fill: InputSignal<string> = input<string>("#eeee");
}
