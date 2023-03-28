import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManualPunchRoutingModule } from './manual-punch-routing.module';
import { ManualPunchComponent } from './manual-punch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { TableModule } from 'src/app/common_table/table/table.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    ManualPunchComponent
  ],
  imports: [
    CommonModule,
    ManualPunchRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    TableModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ManualPunchModule { }
