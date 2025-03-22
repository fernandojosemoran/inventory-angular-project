import { ChangeDetectionStrategy, Component, input, InputSignal } from "@angular/core";

@Component({
  selector: "app-layer-group-icon",
  templateUrl: "./layer-group-icon.component.svg",
  imports: [],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayerGroupIconComponent {
  public width: InputSignal<string> = input<string>("50");
  public height: InputSignal<string> = input<string>("50");
  public fill: InputSignal<string> = input<string>("#eee");
}
