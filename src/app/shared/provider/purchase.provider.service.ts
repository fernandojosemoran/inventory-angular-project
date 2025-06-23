import { Purchase } from "@/app/purchases/interfaces/purchase";
import { Injectable, WritableSignal, signal } from "@angular/core";
import { PurchasePagination } from "../interfaces/purchasse.provider.interface";

interface IPurchaseProviderService {
  getPagination: WritableSignal<PurchasePagination>;
  getAllPurchase: Purchase[];
  getPurchaseByPage(page: number): Purchase[];
}

@Injectable({ providedIn: "root" })
export default class PurchaseProviderService implements IPurchaseProviderService {
  private readonly _purchaseList: WritableSignal<Purchase[][]> = signal<Purchase[][]>([]);
  private readonly _pagination: WritableSignal<PurchasePagination> = signal<PurchasePagination>({} as PurchasePagination);

  public get getAllPurchase(): Purchase[] {
    return this._purchaseList().map((purchases, index) => purchases[index]);
  }

  public get getPagination(): WritableSignal<PurchasePagination> {
    return this._pagination;
  }

  public getPurchaseById(id: number): Purchase[] | undefined {
    return this.getAllPurchase.filter((purchase) => purchase.id === id);
  }

  public getPurchaseByPage(page: number): Purchase[] {
    return this._purchaseList()[page];
  }

  public deletePurchase(id: number): boolean {
    console.log({ id });
    return true;
  }

  public updatePurchase(purchase: Purchase): Purchase {
    return purchase;
  }
}
