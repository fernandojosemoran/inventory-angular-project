import { ChangeDetectionStrategy, Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { CircleSearchInputComponent } from '../circle-search-input/circle-search-input.component';

@Component({
  selector: 'app-actions-bar',
  standalone: true,
  imports: [ CircleSearchInputComponent ],
  templateUrl: './actions-bar.component.html',
  styleUrl: './actions-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsBarComponent {
  public title: InputSignal<string | undefined> = input();

  public productTermSearch: OutputEmitterRef<string> = output<string>();

  public onChangeGenericSearch(term: string) {

    this.productTermSearch.emit(term);
  }
}
