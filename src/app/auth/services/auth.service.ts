import { environments } from "@/environments/environments";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { RefreshTokenResponse } from "../types/refresh-token-response";
import { SingninRequest, SingninResponse } from "../types/signin";
import { SignupRequest, SignupResponse } from "../types/signup";

import AuthHttpError from "@/app/auth/errors/auth-http-error";
import { BackendProxy } from "@/app/shared/types/backend-proxy";
import IAuthService from "../interfaces/auth-service.interface";

// hidden dependencies
const BACKEND_PROXY: BackendProxy = "WEBSITE";
const BACKEND_API: string = environments.proxy === BACKEND_PROXY ? environments.backendApiWebsite : environments.backendApi;

@Injectable({ providedIn: "root" })
export default class AuthService implements IAuthService {
  private readonly _httpClient: HttpClient = inject(HttpClient);

  public signin(signin: SingninRequest): Observable<SingninResponse> {
    return this._httpClient
      .post<SingninResponse>(BACKEND_API.concat("/auth/signin"), signin)
      .pipe(catchError(AuthHttpError.handler));
  }

  public singup(signup: SignupRequest): Observable<SignupResponse> {
    return this._httpClient
      .post<SignupResponse>(BACKEND_API.concat("/auth/signup"), signup)
      .pipe(catchError(AuthHttpError.handler));
  }

  public refreshToken(token: string): Observable<RefreshTokenResponse> {
    return this._httpClient
      .post<RefreshTokenResponse>(BACKEND_API.concat("/auth/refresh-token"), { token })
      .pipe(catchError(AuthHttpError.handler));
  }
}
