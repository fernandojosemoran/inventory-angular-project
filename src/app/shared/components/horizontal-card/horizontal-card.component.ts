import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  OnInit,
  WritableSignal,
  input,
  signal,
} from "@angular/core";
import { ShortTextPipe } from "../../pipes/short-text-pipe.pipe";

@Component({
  selector: "app-horizontal-card",
  standalone: true,
  imports: [ShortTextPipe],
  template: `
    <figure title="{{ cardTitle() }}" class="horizontal__card">
      <div class="horizontal-card__picture">
        <img class="horizontal-card__image" src="{{ cardUrlImage() }}" alt="{{ cardTitle() }}">
      </div>
      <figcaption class="horizontal-card__description">
        <h2 class="horizontal-card__title">{{ cardTitle() }}</h2>
        <p class="horizontal-card-description__paragraph">{{ cardDescription() | shortText:isShortText():48 }}.</p>
      </figcaption>
    </figure>
  `,
  styles: `
    :host {
      display: block;
    }

    .horizontal__card {
      display: flex;
      width: 100%;
      gap: 1em;
      margin: 2em 0;
      max-height: 15em;
      background-color: var(--secondary-color);
      border-radius: 5px;
    }

    .horizontal-card__image {
      width: 100%;
      display: block;
      border-radius: 5px;
    }

    .horizontal-card__picture {
      max-width: 8em;
      height: 100%;
    }

    .horizontal-card-description__paragraph {
      padding-left: 0.4em;
      padding-right: 0.4em;
    }

    .horizontal-card__title{
      padding-left: 0.4em;
      padding-right: 0.4em;
    }

    @media (min-width: 360px) and (max-width: 820px) {
      .horizontal-card__title {
        font-size: 1em;
      }

      .horizontal-card__picture {
        max-width: 7em;
        height: 7em;
      }

      .horizontal-card__image {
        height: 100%;
        width: 7em;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalCardComponent implements OnInit {
  public cardTitle: InputSignal<string> = input.required<string>();
  public cardDescription: InputSignal<string> = input.required<string>();
  public cardUrlImage: InputSignal<string> = input<string>("Image Unknown");

  public isShortText: WritableSignal<boolean> = signal<boolean>(
    window.innerWidth < 820,
  );

  public ngOnInit(): void {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 820) {
        return this.isShortText.set(true);
      } else {
        return this.isShortText.set(false);
      }
    });
  }
}
