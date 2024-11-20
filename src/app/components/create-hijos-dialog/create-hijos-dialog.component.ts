import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { noFutureDate } from '../../validators/no-future-date.validator';

@Component({
  selector: 'app-create-hijos-dialog',
  templateUrl: './create-hijos-dialog.component.html',
  styleUrls: ['./create-hijos-dialog.component.css']
})
export class CreateHijosDialogComponent {

  hijosForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateHijosDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { idPersonal: number }
  ) {
    this.hijosForm = this.fb.group({
      idPersonal: ['', Validators.required],
      tipoDoc: ['', Validators.required],
      numeroDoc: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      apPaterno: ['', Validators.required],
      apMaterno: ['', Validators.required],
      nombre1: ['', Validators.required],
      nombre2: ['', Validators.required],
      nombreCompleto: ['', Validators.required],
      fechaNac: ['', [Validators.required, noFutureDate]],
    });
  }

  

  onSave(): void {
    
    this.hijosForm.get('idPersonal')?.setValue(this.data.idPersonal);
    const nombreprimario = this.hijosForm.get('nombre1')?.value;
    const nombresecundario = this.hijosForm.get('nombre2')?.value;
    const appaterno = this.hijosForm.get('apPaterno')?.value;
    const appmaterno = this.hijosForm.get('apMaterno')?.value;

    const _nombrecompleto = nombreprimario + ' ' + nombresecundario + ' ' + appaterno + ' ' + appmaterno

    this.hijosForm.get('nombreCompleto')?.setValue(_nombrecompleto);

    if (this.hijosForm.valid) {

      this.dialogRef.close(this.hijosForm.value);
    }
  }



}
