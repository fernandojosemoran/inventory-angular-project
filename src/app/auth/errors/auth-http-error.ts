import { AuthErrorResponse } from "@/app/auth/types/auth-error-response";
import { HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

import typeErrors from "@/app/auth/constants/type-errors";

export default class AuthHttpError extends Error {
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

    const validateStatus: string | undefined = AuthHttpError.handlerHttpStatusCode(error.status);

    if (validateStatus) return throwError(() => new AuthHttpError(validateStatus));

    const { response } = error.error as AuthErrorResponse;

    const data: string[] = Object.values(response.errors);

    if (data.find((err) => err === typeErrors["Bad credentials"])) {
      return throwError(() => new AuthHttpError("Las credentiales no son validas."));
    }

    return throwError(() => new AuthHttpError(data[0]));
  }
}
