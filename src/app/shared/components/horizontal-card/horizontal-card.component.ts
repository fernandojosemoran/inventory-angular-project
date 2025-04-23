import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-horizontal-card',
  standalone: true,
  imports: [],
  template: `
    <figure title="{{ cardTitle() }}" class="horizontal__card">
      <div class="horizontal-card__picture">
        <img class="horizontal-card__image" src="{{ cardUrlImage() }}" alt="{{ cardTitle() }}">
      </div>
      <figcaption class="horizontal-card__description">
        <h2 class="horizontal-card__title">{{ cardTitle() }}</h2>
        <p class="horizontal-card-description__paragraph">{{ cardDescription() }}.</p>
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
      background-color: var(--secondary-color);
      border-radius: 5px;
    }

    .horizontal-card__image {
      width: 100%;
      display: block;
      border-radius: 5px;
    }

    .horizontal-card__picture {
      width: 8em;
    }

    .horizontal-card-description__paragraph {
      padding: 0.5em;
    }

    @media (min-width: 360px) and (max-width: 820px) {
      .horizontal-card__title {
        font-size: 1em;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalCardComponent {
  public cardTitle: InputSignal<string> = input<string>("Title Unknown");
  public cardDescription: InputSignal<string> = input<string>("Description Unknown");
  public cardUrlImage: InputSignal<string> = input<string>("Image Unknown");
}
