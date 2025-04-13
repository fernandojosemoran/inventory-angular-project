import { ChangeDetectionStrategy, Component, input, InputSignal, OnInit, output, OutputEmitterRef, signal, WritableSignal } from '@angular/core';
import { CircleSearchInputComponent } from '../circle-search-input/circle-search-input.component';
import { DropDownSelectedOption } from '../../interfaces/dropdown.interface';
import { DropdownWithSearcherComponent } from '../dropdown-with-searcher/dropdown-with-searcher.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actions-bar',
  standalone: true,
  imports: [ CircleSearchInputComponent, DropdownWithSearcherComponent, CommonModule ],
  templateUrl: './actions-bar.component.html',
  styleUrl: './actions-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsBarComponent implements OnInit{
  public title: InputSignal<string> = input("Title not went assigned");
  public dropdownTitle: InputSignal<string> = input("Select an option");
  public dropdownOptionList: InputSignal<string[]> = input<string[]>([]);
  public showDropdownOption: InputSignal<boolean> = input<boolean>(true);
  public showSearchBtn: InputSignal<boolean> = input<boolean>(true);
  public showCreateBtn: InputSignal<boolean> = input<boolean>(true);
  public dropdownOptions: WritableSignal<string[]> = signal<string[]>([]);

  public evtCreateNewBtnClicked: OutputEmitterRef<boolean> = output<boolean>();

  public ngOnInit(): void {
    this.dropdownOptions.set(this.dropdownOptionList());
  }

  public searchTerm: OutputEmitterRef<string> = output<string>();
  public evtDropdownOptionSelected: OutputEmitterRef<DropDownSelectedOption> = output<DropDownSelectedOption>();

  public onChangeGenericSearch(term: string) {
    this.searchTerm.emit(term);
  }

  public dropdownOptionSelected(opt: DropDownSelectedOption): void {
    this.evtDropdownOptionSelected.emit(opt);
  }

  public clickHandler() {
    this.evtCreateNewBtnClicked.emit(true);
  }

  public dropdownSearch(term: string): void {
    const termToSearch: string = term.trim().toLowerCase();
    if (termToSearch.length === 0) return this.dropdownOptions.set(this.dropdownOptionList());
    const filterOptions: string[] = this.dropdownOptions().filter(category => category.trim().toLowerCase().startsWith(termToSearch));
    this.dropdownOptions.set(filterOptions);
  }
}
