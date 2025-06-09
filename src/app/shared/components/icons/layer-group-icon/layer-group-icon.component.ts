import { ChangeDetectionStrategy, Component, InputSignal, input } from "@angular/core";

@Component({
  selector: "app-layer-group-icon",
  templateUrl: "./layer-group-icon.component.svg",
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayerGroupIconComponent {
  public width: InputSignal<string> = input<string>("30");
  public height: InputSignal<string> = input<string>("30");
  public fill: InputSignal<string> = input<string>("#eee");
}
