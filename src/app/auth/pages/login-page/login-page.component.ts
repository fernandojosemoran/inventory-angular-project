import { handlerFormFieldErrors } from "@/app/shared/utilities/handler-form-field-error";
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { Validators } from "@angular/forms";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { InputWithLabelComponent } from "../../../shared/components/input-with-label/input-with-label.component";
import { LoginFormValidators } from "../../types/login-validators";

import AuthHttpError from "@/app/auth/errors/auth-http-error";
import LocalStorageProperties from "@/app/shared/constants/local-storage-properties";
import AuthAlertService from "../../services/auth-alert.service";
import AuthService from "../../services/auth.service";

@Component({
  selector: "app-login",
  imports: [ReactiveFormsModule, InputWithLabelComponent, RouterLink, CommonModule],
  templateUrl: "./login-page.component.html",
  styleUrl: "./login-page.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  private readonly router: Router = inject(Router);
  private readonly _authService: AuthService = inject(AuthService);
  private readonly _authAlertService: AuthAlertService = inject(AuthAlertService);

  private readonly validator: LoginFormValidators = {
    name: [Validators.required, Validators.minLength(8), Validators.maxLength(12)],
    email: [Validators.required, Validators.email],
    password: [Validators.required, Validators.minLength(8), Validators.maxLength(12)],
  };

  public loginForm: FormGroup = new FormGroup({
    name: new FormControl<string>("", {
      validators: this.validator.name,
    }),
    email: new FormControl<string>("", { validators: this.validator.email }),
    password: new FormControl<string>("", {
      validators: this.validator.password,
    }),
  });

  public isValidField(field: string): boolean {
    return !!this.loginForm.controls[field].errors;
  }

  public isPristineField(field: string): boolean {
    return !this.loginForm.controls[field].pristine;
  }

  public handlerFormErrors(field: string): string | null {
    return handlerFormFieldErrors(this.loginForm, { name: field });
  }

  public submit(): void {
    if (this.loginForm.invalid) return;

    this._authService.signin(this.loginForm.value).subscribe({
      error: (error: AuthHttpError): void => this._authAlertService.showAlert(error.message),
      next: ({ response }): void => {
        localStorage.setItem(LocalStorageProperties.ACCESS_TOKEN, response.accessToken);
        this.router.navigate(["/dashboard/home"]);
      },
    });
  }
}
