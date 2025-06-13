import { InputWithLabelComponent } from "@/app/shared/components/input-with-label/input-with-label.component";
import { handlerFormFieldErrors } from "@/app/shared/utilities/handler-form-field-error";
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";

interface RegisterFormValidators {
  username: ValidatorFn[];
  lastName: ValidatorFn[];
  email: ValidatorFn[];
  password: ValidatorFn[];
  confirmPassword: ValidatorFn[];
}

@Component({
  selector: "app-register",
  imports: [ReactiveFormsModule, InputWithLabelComponent, RouterLink, CommonModule],
  templateUrl: "./register-page.component.html",
  styleUrl: "./register-page.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent {
  private readonly router: Router = inject(Router);

  private readonly validator: RegisterFormValidators = {
    lastName: [Validators.required, Validators.maxLength(12), Validators.minLength(8)],
    username: [Validators.required, Validators.maxLength(12), Validators.minLength(8)],
    email: [Validators.required, Validators.email],
    password: [Validators.required, Validators.minLength(8), Validators.maxLength(12)],
    confirmPassword: [Validators.required, Validators.minLength(8), Validators.maxLength(12)],
  };

  public registerForm: FormGroup = new FormGroup({
    username: new FormControl<string>("", {
      validators: this.validator.username,
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

    this.router.navigate(["/auth/login"]);
  }
}
