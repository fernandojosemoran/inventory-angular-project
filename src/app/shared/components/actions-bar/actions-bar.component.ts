import { ChangeDetectionStrategy, Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { CircleSearchInputComponent } from '../circle-search-input/circle-search-input.component';
import { DropDownSelectedOption } from '../../interfaces/dropdown.interface';
import { DropdownWithSearcherComponent } from '../dropdown-with-searcher/dropdown-with-searcher.component';

@Component({
  selector: 'app-actions-bar',
  standalone: true,
  imports: [ CircleSearchInputComponent, DropdownWithSearcherComponent ],
  templateUrl: './actions-bar.component.html',
  styleUrl: './actions-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsBarComponent {
  public title: InputSignal<string> = input("Title not went assigned");
  public dropdownTitle: InputSignal<string> = input("Select an option");
  public dropdownCategoriesList: InputSignal<string[]> = input<string[]>([]);

  public productTermSearch: OutputEmitterRef<string> = output<string>();
  public evtDropdownOptionSelected: OutputEmitterRef<DropDownSelectedOption> = output<DropDownSelectedOption>();

  public onChangeGenericSearch(term: string) {
    this.productTermSearch.emit(term);
  }

  public dropdownOptionSelected(opt: DropDownSelectedOption): void {
    this.evtDropdownOptionSelected.emit(opt);
  }

  public dropdownSearchCategory(term: string): void {

  }
}
