import { InputWithLabelComponent } from "@/app/shared/components/input-with-label/input-with-label.component";
import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
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
})
export class RegisterPageComponent {
  private readonly router: Router = inject(Router);

  private readonly validator: RegisterFormValidators = {
    username: [Validators.required],
    lastName: [Validators.required],
    email: [Validators.required, Validators.email],
    password: [Validators.required],
    confirmPassword: [Validators.required],
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

  public submit(): void {
    this.router.navigate(["/auth/login"]);
  }
}
