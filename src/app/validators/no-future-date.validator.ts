import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noFutureDate(control: AbstractControl): ValidationErrors | null {
  const today = new Date();
  const selectedDate = new Date(control.value);

  if (selectedDate > today) {
    return { futureDate: true };
  }
  return null;
}
