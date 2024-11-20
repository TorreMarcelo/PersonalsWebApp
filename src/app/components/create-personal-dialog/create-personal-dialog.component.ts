import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { noFutureDate } from '../../validators/no-future-date.validator';

@Component({
  selector: 'app-create-personal-dialog',
  templateUrl: './create-personal-dialog.component.html',
  styleUrls: ['./create-personal-dialog.component.css']
})
export class CreatePersonalDialogComponent {

  personalForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreatePersonalDialogComponent>
  ) {
    this.personalForm = this.fb.group({
      tipoDoc: ['', Validators.required],
      numeroDoc: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      apPaterno: ['', Validators.required],
      apMaterno: ['', Validators.required],
      nombre1: ['', Validators.required],
      nombre2: ['', Validators.required],
      nombreCompleto: ['', Validators.required],
      fechaNac: [null, [Validators.required, noFutureDate]],
      fechaIngreso: [null, [Validators.required, noFutureDate]],
    });
  }


  onSave(): void {
    const nombreprimario = this.personalForm.get('nombre1')?.value;
    const nombresecundario = this.personalForm.get('nombre2')?.value;
    const appaterno = this.personalForm.get('apPaterno')?.value;
    const appmaterno = this.personalForm.get('apMaterno')?.value;

    const _nombrecompleto = nombreprimario + ' ' + nombresecundario + ' ' + appaterno + ' ' + appmaterno

    this.personalForm.get('nombreCompleto')?.setValue(_nombrecompleto);

    if (this.personalForm.valid) {

      this.dialogRef.close(this.personalForm.value); 
    }
  }

}
