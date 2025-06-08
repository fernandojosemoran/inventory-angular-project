import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  input,
} from "@angular/core";

@Component({
  selector: "app-badge",
  standalone: true,
  imports: [],
  template: `<span role="budget" class="budget">{{ content() }}</span>`,
  styleUrl: "./badge.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  public content: InputSignal<string | number | boolean> = input.required<
    string | number | boolean
  >();
}
