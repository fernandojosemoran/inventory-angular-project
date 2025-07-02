import { PurchasePagination } from "@/app/shared/interfaces/purchasse.provider.interface";
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit, WritableSignal, inject, signal } from "@angular/core";
import { ActionsBarComponent } from "../../../shared/components/actions-bar/actions-bar.component";
import { ReverseFillButtonComponent } from "../../../shared/components/reverse-fill-button/reverse-fill-button.component";
import { TableSkeletonComponent } from "../../../shared/components/table-skeleton/table-skeleton.component";
import { Purchase } from "../../interfaces/purchase";

import PurchaseService from "../../services/purchase.service";
import GlobalAlertProvider from "@/app/shared/provider/global-alert.provider.service";
import PurchaseProviderService from "@/app/shared/provider/purchase.provider.service";

@Component({
  selector: "app-purchase-page-layout",
  imports: [ActionsBarComponent, CommonModule, ReverseFillButtonComponent, TableSkeletonComponent],
  templateUrl: "./purchase-page-layout.component.html",
  styleUrl: "./purchase-page-layout.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PurchasePageLayoutComponent implements OnInit {
  private readonly _purchaseService: PurchaseService = inject(PurchaseService);
  private readonly _globalAlertProvider: GlobalAlertProvider = inject(GlobalAlertProvider);
  private readonly _purchaseProviderService: PurchaseProviderService = inject(PurchaseProviderService);

  private readonly _termSearched: WritableSignal<string> = signal<string>("");

  public readonly isOpenAddPurchaseModal: WritableSignal<boolean> = signal<boolean>(false);
  public readonly isOpenDeletePurchaseModal: WritableSignal<boolean> = signal<boolean>(false);
  public readonly isOpenUpdatePurchaseModal: WritableSignal<boolean> = signal<boolean>(false);
  public readonly skeletonLoader: WritableSignal<boolean> = signal<boolean>(true);

  public readonly editPurchaseSelected: WritableSignal<Purchase> = signal<Purchase>({} as Purchase);
  public readonly deletePurchaseSelected: WritableSignal<Purchase> = signal<Purchase>({} as Purchase);
  public readonly purchaseList: WritableSignal<Purchase[]> = signal<Purchase[]>([]);

  public readonly pagination: WritableSignal<PurchasePagination> = signal<PurchasePagination>({} as PurchasePagination);

  private handlerGetAllResponse(response: Purchase[]): void {
    if (response.length <= 0) return;

    this.purchaseList.set(response);
    this.skeletonLoader.update((state) => !state);
    // this._purchaseProviderService
  }

  public ngOnInit(): void {
    this._purchaseService.getAll().subscribe({
      error: (error): void => this._globalAlertProvider.showAlert(error),
      next: this.handlerGetAllResponse,
    });
  }

  public searchPurchase(term: string): void {
    this._purchaseService.searchPurchase(term).subscribe({
      error: (error): void => this._globalAlertProvider.showAlert(error),
      next: (response): void => console.log(response.response),
    });
  }

  public openAddPurchase(state: boolean): void {
    this.isOpenAddPurchaseModal.update(() => state);
  }

  public openDeletePurchase(id: number): void {
    console.log({ id });
    this.isOpenDeletePurchaseModal.update((state) => !state);
  }

  public openUpdatePurchase(id: number): void {
    console.log({ id });
    this.isOpenUpdatePurchaseModal.update((state) => !state);
  }

  public closeAddPurchase(state: boolean): void {
    this.isOpenAddPurchaseModal.set(state);
  }

  public closeDeletePurchase(state: boolean): void {
    this.isOpenDeletePurchaseModal.set(state);
  }

  public closeUpdatePurchase(state: boolean): void {
    this.isOpenUpdatePurchaseModal.set(state);
  }

  public confirmAddPurchase(purchase: Purchase): void {
    console.log({ purchase });
  }

  public confirmDeletePurchase(isDeleted: boolean): void {
    console.log({ isDeleted });
  }

  public confirmUpdatePurchase(purchase: Purchase): void {
    console.log({ purchase });
  }
}
