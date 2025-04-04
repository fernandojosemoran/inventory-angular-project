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
        {{ cardDescription() }}.
      </figcaption>
    </figure>
  `,
  styleUrl: "./horizontal-card.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalCardComponent {
  public cardTitle: InputSignal<string> = input<string>("Title Unknown");
  public cardDescription: InputSignal<string> = input<string>("Description Unknown");
  public cardUrlImage: InputSignal<string> = input<string>("Image Unknown");
}
