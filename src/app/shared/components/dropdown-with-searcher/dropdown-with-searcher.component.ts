import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  OutputEmitterRef,
  WritableSignal,
  input,
  output,
  signal,
} from "@angular/core";
import { DropDownSelectedOption } from "../../interfaces/dropdown.interface";
import { DownArrowIconComponent } from "../icons/down-arrow-icon/down-arrow-icon.component";
import { InputWithLabelComponent } from "../input-with-label/input-with-label.component";

@Component({
  selector: "app-dropdown-with-searcher",
  standalone: true,
  imports: [CommonModule, InputWithLabelComponent, DownArrowIconComponent],
  template: `
    <div class="searchable-dropdown">
      <button
        title="{{ toolTip() }}"
        class="searchable-dropdown-btn searchable-dropdown-btn--hover"
        (click)="openDropdown()"
        aria-label="Open dropdown list"
      >
        @if (dropdownOptionSelected().name) {
          <span>{{ dropdownOptionSelected().name }}</span>
        }
        @else {
          <span>{{ title() }}</span>
        }
        <app-down-arrow-icon width="18"/>
      </button>
      <div
        class="searchable-dropdown-content"
        [ngClass]="{'show': openDropdownFlag()}"
      >
        <div
          class="search-box"
          role="combobox"
          aria-controls="panel-1"
          [attr.aria-expanded]="openDropdownFlag()"
        >
          <app-input-with-label
            [placeholder]="placeholder()"
            (input)="search($event)"
            defaultValue=""
            for="{{ placeholder() }}-id"
          />
        </div>
        <div class="searchable-dropdown-items" role="listbox">
          @for (option of optionsList(); track $index) {
            <section
              (click)="selectOneOption($event, $index)"
              (keydown.enter)="selectOneOption($event, $index)"
              (keydown.space)="selectOneOption($event, $index)"
              [attr.tabindex]="openDropdownFlag() ? 0 : -1"
              role="option"
              [attr.aria-selected]="dropdownOptionSelected().index === $index"
              class="searchable-dropdown-item"
            >
              {{ option }}
            </section>
          }
        </div>
      </div>
    </div>
  `,
  styleUrl: "./dropdown-with-searcher.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownWithSearcherComponent {
  public readonly optionsList: InputSignal<string[]> = input.required<string[]>();
  public readonly title: InputSignal<string> = input.required<string>();
  public readonly placeholder: InputSignal<string> = input.required<string>();
  public readonly toolTip: InputSignal<string> = input<string>("Tooltip Unknown");

  public dropdownOptionSelected: WritableSignal<DropDownSelectedOption> = signal<DropDownSelectedOption>(
    {} as DropDownSelectedOption,
  );
  public openDropdownFlag: WritableSignal<boolean> = signal<boolean>(false);

  public evtSearch: OutputEmitterRef<string> = output<string>();
  public evtOptionSelected: OutputEmitterRef<DropDownSelectedOption> = output<DropDownSelectedOption>();

  public openDropdown(): void {
    this.openDropdownFlag.update((value) => !value);
  }

  public search(event: Event): void {
    const value: string = (event.target as HTMLInputElement).value;
    this.evtSearch.emit(value);
  }

  public selectOneOption(event: Event, index: number): void {
    const value: string = (event.target as HTMLElement).textContent ?? "";
    const option: DropDownSelectedOption = { index, name: value.trim() };

    this.dropdownOptionSelected.set(option);
    this.openDropdownFlag.update((value) => !value);
    this.evtOptionSelected.emit(option);
  }
}
