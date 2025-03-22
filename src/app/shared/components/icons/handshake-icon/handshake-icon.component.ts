import { ChangeDetectionStrategy, Component, input, InputSignal } from "@angular/core";

@Component({
  selector: "app-handshake-icon",
  templateUrl: "./handshake-icon.component.svg",
  imports: [],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HandshakeIconComponent {
  public width: InputSignal<string> = input<string>("50");
  public height: InputSignal<string> = input<string>("50");
  public fill: InputSignal<string> = input<string>("#eeee");
}
