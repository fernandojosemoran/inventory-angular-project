import { HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { PurchaseErrorResponse } from "../types/purchase-error-response";

export default class PurchaseHttpError extends Error {
  private constructor(public override readonly message: string) {
    super(message);
  }

  private static handlerHttpStatusCode(status: number): string | undefined {
    if (status === 403) return "No existe una cuenta registrada.";
    if (status === 0) return "Lo siento algo sucedio al conectarse al servidor.";

    return undefined;
  }

  public static handler(error: HttpErrorResponse): Observable<never> {
    console.error(error);

    const validateStatus: string | undefined = PurchaseHttpError.handlerHttpStatusCode(error.status);

    if (validateStatus) return throwError(() => new PurchaseHttpError(validateStatus));

    const { response } = error.error as PurchaseErrorResponse;

    const data: string[] = Object.values(response.errors);

    if (data.find((err) => err === "Bad credentials")) {
      return throwError(() => new PurchaseHttpError("Las credentiales no son validas."));
    }
    return throwError(() => new PurchaseHttpError(data[0]));
  }
}
