import { HttpErrorResponse, HttpStatusCode } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { CartErrorResponse } from "../types/cart-http-errors-response";

export default class CartHttpError extends Error {
  private constructor(public override readonly message: string) {
    super(message);
  }

  private static handlerHttpStatusCode(status: number): string | undefined {
    if (status === HttpStatusCode.Forbidden) return "No existe una cuenta registrada.";
    if (status === 0) return "Lo siento algo sucedio al conectarse al servidor.";

    return undefined;
  }

  public static handler(error: HttpErrorResponse): Observable<never> {
    console.error(error);

    const validateStatus: string | undefined = CartHttpError.handlerHttpStatusCode(error.status);

    if (validateStatus) return throwError(() => new CartHttpError(validateStatus));

    const { response } = error.error as CartErrorResponse;

    const data: string[] = Object.values(response.errors);

    if (data.find((err) => err === "Bad credentials")) {
      return throwError(() => new CartHttpError("Las credentiales no son validas."));
    }

    return throwError(() => new CartHttpError(data[0]));
  }
}
