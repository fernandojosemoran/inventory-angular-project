import { environments } from "@/environments/environments";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { SingninRequest, SingninResponse } from "../types/signin";
import { SignupRequest, SignupResponse } from "../types/signup";

import HttpError from "@/app/shared/errors/http-error";
import IAuthService from "../interfaces/auth-service.interface";

// hidden dependencies
const BACKEND_API = environments.backendApi;

@Injectable({ providedIn: "root" })
export default class AuthService implements IAuthService {
  private readonly _httpClient: HttpClient = inject(HttpClient);

  public signin(signin: SingninRequest): Observable<SingninResponse> {
    return this._httpClient.post<SingninResponse>(BACKEND_API.concat("/auth/signin"), signin).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return HttpError.handler(error.error, error.status);
      }),
    );
  }

  public singup(signup: SignupRequest): Observable<SignupResponse> {
    return this._httpClient.post<SignupResponse>(BACKEND_API.concat("/auth/signup"), signup).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return HttpError.handler(error.message, error.status);
      }),
    );
  }
}
