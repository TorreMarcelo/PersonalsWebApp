import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonalService } from './personal.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { CreatePersonalDialogComponent } from '../create-personal-dialog/create-personal-dialog.component';
import { UpdatePersonalDialogComponent } from '../update-personal-dialog/update-personal-dialog.component';
import { DeletePersonalDialogComponent } from '../delete-personal-dialog/delete-personal-dialog.component';
import { HijosComponent } from '../hijos/hijos.component';
import { Personal } from 'src/app/models/Personal';



@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  displayedColumns: string[] = [
    'Nro',
    'nombreCompleto', 
    'tipoDoc', 
    'numeroDoc', 
    'fechaNac', 
    'fechaIngreso',
    'edit',
    'eliminar',
    'hijos'
  ];

  personalList: any[] = [];
  dataSource = new MatTableDataSource<Personal>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private personalService: PersonalService,
    private dialog: MatDialog

    ) {
    
  }

  ngOnInit(){

    this.getListaPersonal();

  }

  getListaPersonal(){
    this.personalService.getAllPersonal().subscribe((response: any) =>{
      this.personalList = response;

      this.dataSource.data = response;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;


    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreatePersonalDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.personalService.createPersonal(result).subscribe(() => {
          this.getListaPersonal();
        });
      }
    });
  }

  openEditDialog(personal: Personal): void {
    const dialogRef = this.dialog.open(UpdatePersonalDialogComponent, {
      width: '400px',
      data: { ...personal }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updatePersonal(result);
      }
    });
  }
  
  updatePersonal(updatedPersonal: Personal) {
    this.personalService.updatePersonal(updatedPersonal).subscribe(() => {
      this.getListaPersonal();
    });
  }

  openDeleteDialog(personal: Personal): void {
    const dialogRef = this.dialog.open(DeletePersonalDialogComponent, {
      width: '250px',
      data: { id: personal.idPersonal }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.deletePersonal(personal.idPersonal);
      }
    });
  }

  deletePersonal(id: number): void {
    this.personalService.deletePersonal(id).subscribe(() => {
      this.getListaPersonal();
    });
  }

  openHijosDialog(personal: Personal): void {
    const dialogRef = this.dialog.open(HijosComponent, {
      width: '800px',
      data: { Personal: personal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog cerrado');
    });
  }
  

}
