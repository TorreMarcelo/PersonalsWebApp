import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-personal-dialog',
  templateUrl: './delete-personal-dialog.component.html',
  styleUrls: ['./delete-personal-dialog.component.css']
})
export class DeletePersonalDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeletePersonalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onDelete(): void {
    this.dialogRef.close('confirm');
  }

}
