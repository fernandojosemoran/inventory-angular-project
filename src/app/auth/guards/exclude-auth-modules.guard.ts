import { Injectable, inject } from "@angular/core";
import { CanActivate, CanMatch, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

import LocalStorageProperties from "@/app/shared/constants/local-storage-properties";
import AuthService from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
export class ExcludeAuthModulesGuard implements CanActivate, CanMatch {
  private readonly _authService: AuthService = inject(AuthService);
  private readonly _router: Router = inject(Router);

  private checkAuthentication(): Observable<boolean> {
    const token: string | null = localStorage.getItem(LocalStorageProperties.ACCESS_TOKEN);

    if (!token) return of(true);

    return this._authService.refreshToken(token).pipe(
      map((response) => {
        if (response && response.response === true) {
          this._router.navigate(["/dashboard"]);
          return false;
        }

        localStorage.removeItem(LocalStorageProperties.ACCESS_TOKEN);
        return true;
      }),
      catchError(() => {
        localStorage.removeItem(LocalStorageProperties.ACCESS_TOKEN);
        return of(true);
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
