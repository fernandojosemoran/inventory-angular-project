import { Observable, throwError } from "rxjs";

export default class HttpError extends Error {
  private constructor(public override readonly message: string) {
    super(message);
  }

  public static handler(message: string, status: number): Observable<never> {
    if (status === 0) return throwError(() => new HttpError("Lo siento algo sucedio al conectarse al servidor."));

    return throwError(() => new HttpError(message));
  }
}
