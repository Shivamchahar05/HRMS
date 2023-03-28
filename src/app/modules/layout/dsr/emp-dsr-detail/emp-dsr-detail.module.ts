import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpDsrDetailRoutingModule } from './emp-dsr-detail-routing.module';
import { EmpDsrDetailComponent } from './emp-dsr-detail.component';
import { TableModule } from 'src/app/common_table/table/table.module';


@NgModule({
  declarations: [
    EmpDsrDetailComponent
  ],
  imports: [
    CommonModule,
    EmpDsrDetailRoutingModule,
    TableModule
  ]
})
export class EmpDsrDetailModule { }
