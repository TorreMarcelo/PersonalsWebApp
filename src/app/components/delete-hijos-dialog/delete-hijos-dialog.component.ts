import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-hijos-dialog',
  templateUrl: './delete-hijos-dialog.component.html',
  styleUrls: ['./delete-hijos-dialog.component.css']
})
export class DeleteHijosDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteHijosDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onDelete(): void {
    this.dialogRef.close('confirm');
  }

}
