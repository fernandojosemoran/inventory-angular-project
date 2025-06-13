import { FormGroup } from "@angular/forms";
import { formErrorsTypes } from "./form-errors-types";

// TODO: change global language for convert automatically the name phrase to spanish and another language
type FieldName = {
  name: string;
  nameAlternative?: string;
};

export function handlerFormFieldErrors(form: FormGroup, fieldName: FieldName): string | null {
  const field = form.controls[fieldName.name];

  if (!field) return null;

  const errors = field.errors!;

  for (const key of Object.keys(field.errors ?? {})) {
    switch (key) {
      case formErrorsTypes.REQUIRED:
        return `El campo ${fieldName.name} es requerido.`;
      case formErrorsTypes.MIN:
        return `El valor minimo permitido para este campo es ${errors[formErrorsTypes.MIN]?.min}.`;
      case formErrorsTypes.MAX:
        return `El valor maximo permitido para este campo es ${errors[formErrorsTypes.MAX]?.max}.`;
      case formErrorsTypes.MAX_LENGTH:
        return `La cantidad maxima de caracteres permitido es ${errors[formErrorsTypes.MAX_LENGTH]?.requiredLength}.`;
      case formErrorsTypes.MIN_LENGTH:
        return `La cantidad minima de caracteres permitido es ${errors[formErrorsTypes.MIN_LENGTH]?.requiredLength}`;
      case formErrorsTypes.EMAIL:
        return "El formato del email es incorrecto.";
      default:
        return null;
    }
  }

  return null;
}
