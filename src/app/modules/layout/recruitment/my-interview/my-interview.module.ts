import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyInterviewRoutingModule } from './my-interview-routing.module';
import { MyInterviewComponent } from './my-interview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { TableModule } from 'src/app/common_table/table/table.module';
@NgModule({
  declarations: [
    MyInterviewComponent
  ],
  imports: [
    CommonModule,
    MyInterviewRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    TableModule
  ]
})
export class MyInterviewModule { }
