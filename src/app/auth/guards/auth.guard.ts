import { Injectable, inject } from "@angular/core";
import { CanActivate, CanMatch, Router } from "@angular/router";
import { Observable, catchError, map, of } from "rxjs";

import localStorageKeys from "@/app/shared/constants/local-storage-keys";
import AuthService from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate, CanMatch {
  private readonly _authService: AuthService = inject(AuthService);
  private readonly _router: Router = inject(Router);

  private checkAuthentication(): Observable<boolean> {
    const token: string | null = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    if (!token) {
      this._router.navigate(["/auth/login"]);
      return of(false);
    }

    return this._authService.refreshToken(token).pipe(
      map((response) => {
        if (response && response.response === true) return true;

        this._router.navigate(["/auth/login"]);
        return false;
      }),
      catchError(() => {
        this._router.navigate(["/auth/login"]);
        return of(false);
      }),
    );
  }

  public canMatch(): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkAuthentication();
  }

  public canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkAuthentication();
  }
}
