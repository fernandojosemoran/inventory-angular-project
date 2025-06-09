import { ChangeDetectionStrategy, Component, InputSignal, input } from "@angular/core";

@Component({
  selector: "app-book-icon",
  imports: [],
  templateUrl: "./book-icon.component.svg",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookIconComponent {
  public width: InputSignal<string> = input<string>("30");
  public height: InputSignal<string> = input<string>("30");
  public fill: InputSignal<string> = input<string>("#eeee");
}
