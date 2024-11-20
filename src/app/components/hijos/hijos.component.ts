import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Hijo } from 'src/app/models/Hijo';
import { HijosService } from './hijos.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreateHijosDialogComponent } from '../create-hijos-dialog/create-hijos-dialog.component';
import { UpdateHijosDialogComponent } from '../update-hijos-dialog/update-hijos-dialog.component';
import { DeleteHijosDialogComponent } from '../delete-hijos-dialog/delete-hijos-dialog.component';
import { Personal } from 'src/app/models/Personal';

@Component({
  selector: 'app-hijos',
  templateUrl: './hijos.component.html',
  styleUrls: ['./hijos.component.css']
})
export class HijosComponent implements OnInit{

  displayedColumns: string[] = [
    'Nro',
    'nombreCompleto', 
    'fechaNac',
    'editar',
    'eliminar'
  ];

  personalList: any[] = [];
  dataSource = new MatTableDataSource<Hijo>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private hijoService: HijosService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<HijosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { Personal: Personal }
    ) {
    
  }

  ngOnInit(){

    this.getListaHijosPorPersonal();

  }

  getListaHijosPorPersonal(){
    this.hijoService.getHijoByPersonal(this.data.Personal.idPersonal).subscribe((response: any) =>{
      this.personalList = response;

      this.dataSource.data = response;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;


    });

  }

  getListaHijo(){
    this.hijoService.getAllHijo().subscribe((response: any) =>{
      this.personalList = response;

      this.dataSource.data = response;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;


    });
  }


  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateHijosDialogComponent, {
      data: {idPersonal: this.data.Personal.idPersonal}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.hijoService.createHijo(result).subscribe(() => {
          console.log('efeeee')
          this.getListaHijosPorPersonal();
        });
      }
    });
  }

  openEditDialog(hijo: Hijo): void {
    const dialogRef = this.dialog.open(UpdateHijosDialogComponent, {
      width: '400px',
      data: { ...hijo }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateHijo(result);
      }
    });
  }
  
  updateHijo(updatedHijo: Hijo) {
    this.hijoService.updateHijo(updatedHijo).subscribe(() => {
      this.getListaHijosPorPersonal();
    });
  }

  openDeleteDialog(hijo: Hijo): void {
    const dialogRef = this.dialog.open(DeleteHijosDialogComponent, {
      width: '250px',
      data: { id: hijo.idHijo }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.deleteHijo(hijo.idHijo);
      }
    });
  }

  deleteHijo(id: number): void {
    this.hijoService.deleteHijo(id).subscribe(() => {
      this.getListaHijosPorPersonal();
    });
  }

  

}
