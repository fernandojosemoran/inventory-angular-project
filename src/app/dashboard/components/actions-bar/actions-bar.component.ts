import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeIconComponent } from "../../../shared/components/icons/home-icon/home-icon.component";

@Component({
  selector: 'app-dashboard-actions-bar',
  styleUrl: "./actions-bar.component.css",
  standalone: true,
  imports: [ RouterLink, HomeIconComponent ],
  templateUrl: "./actions-bar.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsBarComponent {
    private _genericSearch$: WritableSignal<string> = signal<string>("");

    public onChangeGenericSearch(event: Event) {
      const inputElement = event.target as HTMLInputElement;
      this._genericSearch$.set(inputElement.value);
    }
}
