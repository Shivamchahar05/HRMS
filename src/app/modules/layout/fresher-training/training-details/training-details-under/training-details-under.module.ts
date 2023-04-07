import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingDetailsUnderRoutingModule } from './training-details-under-routing.module';
import { TrainingDetailsUnderComponent } from './training-details-under.component';
import { TableModule } from 'src/app/common_table/table/table.module';

@NgModule({
  declarations: [
    TrainingDetailsUnderComponent
  ],
  imports: [
    CommonModule,
    TrainingDetailsUnderRoutingModule,
    TableModule
  ]
})
export class TrainingDetailsUnderModule { }
