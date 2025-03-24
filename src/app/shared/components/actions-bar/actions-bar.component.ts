import { ChangeDetectionStrategy, Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'app-actions-bar',
  standalone: true,
  imports: [],
  templateUrl: './actions-bar.component.html',
  styleUrl: './actions-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsBarComponent {
  public title: InputSignal<string | undefined> = input();

  public productTermSearch: OutputEmitterRef<string> = output<string>();

  public onChangeGenericSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    this.productTermSearch.emit(inputElement.value);
  }
}
