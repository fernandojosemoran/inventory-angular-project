import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  input,
} from "@angular/core";

@Component({
  selector: "app-table-skeleton",
  standalone: true,
  imports: [],
  templateUrl: "./table-skeleton.component.html",
  styleUrl: "./table-skeleton.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableSkeletonComponent {
  public tableDataList: InputSignal<unknown[]> = input.required<unknown[]>();
}
