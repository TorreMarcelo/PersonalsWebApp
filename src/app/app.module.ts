import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalComponent } from './components/personal/personal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import { CreatePersonalDialogComponent } from './components/create-personal-dialog/create-personal-dialog.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon'
import { UpdatePersonalDialogComponent } from './components/update-personal-dialog/update-personal-dialog.component';
import { FormsModule } from '@angular/forms';
import { DeletePersonalDialogComponent } from './components/delete-personal-dialog/delete-personal-dialog.component';
import { HijosComponent } from './components/hijos/hijos.component';
import { UpdateHijosDialogComponent } from './components/update-hijos-dialog/update-hijos-dialog.component';
import { DeleteHijosDialogComponent } from './components/delete-hijos-dialog/delete-hijos-dialog.component';
import { CreateHijosDialogComponent } from './components/create-hijos-dialog/create-hijos-dialog.component';
import { HomeComponent } from './components/home/home.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    CreatePersonalDialogComponent,
    UpdatePersonalDialogComponent,
    DeletePersonalDialogComponent,
    HijosComponent,
    UpdateHijosDialogComponent,
    DeleteHijosDialogComponent,
    CreateHijosDialogComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    AppRoutingModule, 
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
