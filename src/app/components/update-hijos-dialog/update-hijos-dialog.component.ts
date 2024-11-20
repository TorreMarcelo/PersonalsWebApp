import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hijo } from 'src/app/models/Hijo';

@Component({
  selector: 'app-update-hijos-dialog',
  templateUrl: './update-hijos-dialog.component.html',
  styleUrls: ['./update-hijos-dialog.component.css']
})
export class UpdateHijosDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<UpdateHijosDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hijo) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  onUpdate(): void {

    
    const _nombrecompleto = this.data.nombre1 + ' ' + this.data.nombre2 + ' ' + this.data.apPaterno + ' ' + this.data.apMaterno
    this.data.nombreCompleto = _nombrecompleto

    this.dialogRef.close(this.data);
  }

}
