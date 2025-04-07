
import { HttpErrorResponse } from "@angular/common/http";
import { catchError, of, OperatorFunction } from "rxjs";

export function handlerError<T>(): OperatorFunction<T, T | unknown> {
  return catchError((error: HttpErrorResponse) => {
    console.error(error);
    return of();
  });
}
