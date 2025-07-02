import { InputWithLabelComponent } from "@/app/shared/components/input-with-label/input-with-label.component";
import { handlerFormFieldErrors } from "@/app/shared/utilities/handler-form-field-error";
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { RegisterFormValidators } from "../../types/register-validators";

import AuthService from "../../services/auth.service";

@Component({
  selector: "app-register",
  imports: [ReactiveFormsModule, InputWithLabelComponent, RouterLink, CommonModule],
  templateUrl: "./register-page.component.html",
  styleUrl: "./register-page.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent {
  private readonly _router: Router = inject(Router);
  private readonly _authService: AuthService = inject(AuthService);

  private readonly validator: RegisterFormValidators = {
    lastName: [Validators.required, Validators.maxLength(12), Validators.minLength(8)],
    name: [Validators.required, Validators.maxLength(12), Validators.minLength(8)],
    email: [Validators.required, Validators.email],
    password: [Validators.required, Validators.minLength(8), Validators.maxLength(12)],
    confirmPassword: [Validators.required, Validators.minLength(8), Validators.maxLength(12)],
  };

  public registerForm: FormGroup = new FormGroup({
    name: new FormControl<string>("", {
      validators: this.validator.name,
    }),

    lastName: new FormControl<string>("", {
      validators: this.validator.password,
    }),

    email: new FormControl<string>("", { validators: this.validator.email }),

    password: new FormControl<string>("", {
      validators: this.validator.password,
    }),

    confirmPassword: new FormControl<string>("", {
      validators: this.validator.confirmPassword,
    }),
  });

  public isValidField(field: string): boolean {
    return !!this.registerForm.controls[field].errors;
  }

  public isPristineField(field: string): boolean {
    return !this.registerForm.controls[field].pristine;
  }

  public handlerFormErrors(field: string): string | null {
    return handlerFormFieldErrors(this.registerForm, { name: field });
  }

  public submit(): void {
    const fields = this.registerForm.value;

    if (this.registerForm.invalid && fields["password"] !== fields["confirmPassword"]) return;

    this._authService.singup(this.registerForm.value).subscribe({
      error: (error): void => console.error(error),
      next: (): unknown => this._router.navigate(["/auth/login"]),
    });
  }
}
