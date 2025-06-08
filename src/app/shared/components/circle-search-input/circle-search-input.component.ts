import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  OnDestroy,
  OnInit,
  OutputEmitterRef,
  input,
  output,
} from "@angular/core";
import { Subject, Subscription, debounceTime } from "rxjs";

@Component({
  selector: "app-circle-search-input",
  standalone: true,
  imports: [],
  template: `
    <input
      title="{{ toolTip() }}"
      id="search__input__generic"
      type="search"
      required
      placeholder="Search"
      (input)="evtSearch($event)"
    />
  `,
  styles: `
    #search__input__generic {
      outline: none;
      border: none;
      background-color: var(--secondary-color);
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="%23999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>');
      background-repeat: no-repeat;
      background-position: 10px center;
      border-radius: 20px;
      padding-left: 2em;
      padding-top: 0.8em;
      padding-bottom: 0.8em;
      color: var(--primary-business-color);
      font-family: "Satoshi-Ligth";
      font-weight: 500;
    }

    @media (min-width: 360px) and (max-width: 830px) {
      #search__input__generic {
        width: 10em;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircleSearchInputComponent implements OnInit, OnDestroy {
  public readonly toolTip: InputSignal<string> = input<string>("Tooltip Unknown");
  private _debounce: Subject<string> = new Subject<string>();
  private _debounceSubscription?: Subscription;

  public ngOnInit(): void {
    this._debounce.pipe(debounceTime(1000)).subscribe((term) => this.productTermSearch.emit(term));
  }

  public productTermSearch: OutputEmitterRef<string> = output<string>();

  public evtSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this._debounce.next(inputElement.value);
  }

  public ngOnDestroy(): void {
    this._debounceSubscription?.unsubscribe();
  }
}
