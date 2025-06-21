import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import GlobalAlertProvider from "./shared/provider/global-alert.provider.service";
import { GloabalAlertComponent } from "./shared/components/gloabal-alert/gloabal-alert.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, GloabalAlertComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  public title = "inventory";

  private readonly _globalAlertProvider: GlobalAlertProvider = inject(GlobalAlertProvider);

  public isOpen(): boolean {
    return this._globalAlertProvider.getIsOpen();
  }
}
