import { ValidatorFn } from "@angular/forms";

export type RegisterFormValidators = {
  name: ValidatorFn[];
  lastName: ValidatorFn[];
  email: ValidatorFn[];
  password: ValidatorFn[];
  confirmPassword: ValidatorFn[];
};
