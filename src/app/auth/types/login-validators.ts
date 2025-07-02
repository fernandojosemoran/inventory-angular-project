import { ValidatorFn } from "@angular/forms";

export type LoginFormValidators = {
  name: ValidatorFn[];
  email: ValidatorFn[];
  password: ValidatorFn[];
};
