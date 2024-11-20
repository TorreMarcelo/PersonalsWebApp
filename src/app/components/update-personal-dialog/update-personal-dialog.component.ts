import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Personal } from 'src/app/models/Personal';

@Component({
  selector: 'app-update-personal-dialog',
  templateUrl: './update-personal-dialog.component.html',
  styleUrls: ['./update-personal-dialog.component.css']
})
export class UpdatePersonalDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<UpdatePersonalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Personal) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  onUpdate(): void {
    const _nombrecompleto = this.data.nombre1 + ' ' + this.data.nombre2 + ' ' + this.data.apPaterno + ' ' + this.data.apMaterno
    this.data.nombreCompleto = _nombrecompleto

    this.dialogRef.close(this.data);
  }

}
