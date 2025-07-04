import { HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { ProductErrorResponse } from "../types/product-error-response";

export default class ProductHttpError extends Error {
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

    const validateStatus: string | undefined = ProductHttpError.handlerHttpStatusCode(error.status);

    if (validateStatus) return throwError(() => new ProductHttpError(validateStatus));

    const { response } = error.error as ProductErrorResponse;

    const data: string[] = Object.values(response.errors);

    if (data.find((err) => err === "Bad credentials")) {
      return throwError(() => new ProductHttpError("Las credentiales no son validas."));
    }

    return throwError(() => new ProductHttpError(data[0]));
  }
}
