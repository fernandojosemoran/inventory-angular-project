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
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputWithLabelComponent,
    RouterLink,
    CommonModule,
  ],
  templateUrl: "./login-page.component.html",
  styleUrl: "./login-page.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  private readonly router: Router = inject(Router);

  private readonly validator: LoginFormValidators = {
    username: [Validators.required],
    email: [Validators.required, Validators.email],
    password: [Validators.required],
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

  public submit(): void {
    this.router.navigate(["/dashboard/home"]);
  }
}
