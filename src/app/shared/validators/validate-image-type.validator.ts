import { FormControl, ValidationErrors } from "@angular/forms";

function getExtension(allowedTypes: string[], filePath: string): boolean | undefined {
  for (const ext of allowedTypes) {
    if (filePath.endsWith(ext)) return true;
  }
  return undefined;
}

export function imageValidator(control: FormControl): ValidationErrors | null {
  const file = control.value as File | undefined;

  if (!file) return null;

  const allowedTypes: string[] = [".png", ".jpeg", ".jpg", ".webp"];

  if (!getExtension(allowedTypes, String(file))) return { extensionNotAllowed: "Extension not allowed" };

  const maxSize = 5 * 1024 * 1024; // 5MB

  if (file.size > maxSize) return { fileSizeExceeded: "Image size exceeds 5MB." };

  return null;
}
