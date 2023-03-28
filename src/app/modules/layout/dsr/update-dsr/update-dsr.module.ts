import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateDsrRoutingModule } from './update-dsr-routing.module';
import { UpdateDsrComponent } from './update-dsr.component';
import { MatIconModule } from '@angular/material/icon';
import { EditorModule } from '@tinymce/tinymce-angular'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTimepickerModule } from 'mat-timepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    UpdateDsrComponent
  ],
  imports: [
    CommonModule,
    UpdateDsrRoutingModule,
    MatIconModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTimepickerModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class UpdateDsrModule { }
