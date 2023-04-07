import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceComponent } from './attendance.component';
import { TableModule } from 'src/app/common_table/table/table.module';


@NgModule({
  declarations: [
    AttendanceComponent
  ],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    TableModule
    
  ]
})
export class AttendanceModule { }
