import { ChangeDetectionStrategy, Component, input, InputSignal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-actions-bar',
  standalone: true,
  imports: [],
  templateUrl: './actions-bar.component.html',
  styleUrl: './actions-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsBarComponent {
  private _genericSearch$: WritableSignal<string> = signal<string>("");

  public onChangeGenericSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this._genericSearch$.set(inputElement.value);
  }

  public title: InputSignal<string | undefined> = input();
}
