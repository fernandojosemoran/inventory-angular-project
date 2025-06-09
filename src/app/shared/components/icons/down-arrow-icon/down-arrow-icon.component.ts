import { ChangeDetectionStrategy, Component, InputSignal, input } from "@angular/core";

@Component({
    selector: "app-down-arrow-icon",
    imports: [],
    templateUrl: "./down-arrow-icon.component.svg",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DownArrowIconComponent {
  public width: InputSignal<string> = input<string>("30");
  public height: InputSignal<string> = input<string>("30");
  public fill: InputSignal<string> = input<string>("#eeee");
}
