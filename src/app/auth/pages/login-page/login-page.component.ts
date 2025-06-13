import { handlerFormFieldErrors } from "@/app/shared/utilities/handler-form-field-error";
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ValidatorFn, Validators } from "@angular/forms";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { InputWithLabelComponent } from "../../../shared/components/input-with-label/input-with-label.component";

interface LoginFormValidators {
  username: ValidatorFn[];
  email: ValidatorFn[];
  password: ValidatorFn[];
}
@Component({
  selector: "app-login",
  imports: [ReactiveFormsModule, InputWithLabelComponent, RouterLink, CommonModule],
  templateUrl: "./login-page.component.html",
  styleUrl: "./login-page.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  private readonly router: Router = inject(Router);

  private readonly validator: LoginFormValidators = {
    username: [Validators.required, Validators.minLength(8), Validators.maxLength(12)],
    email: [Validators.required, Validators.email],
    password: [Validators.required, Validators.minLength(8), Validators.maxLength(12)],
  };

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl<string>("", {
      validators: this.validator.username,
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
    console.log({ form: this.loginForm, username_touched: this.loginForm.controls["username"].pristine });

    if (this.loginForm.invalid) return;

    this.router.navigate(["/dashboard/home"]);
  }
}
