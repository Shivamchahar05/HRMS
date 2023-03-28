import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestedTrainingRoutingModule } from './requested-training-routing.module';
import { RequestedTrainingComponent } from './requested-training.component';
import { TableModule } from 'src/app/common_table/table/table.module';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    RequestedTrainingComponent
  ],
  imports: [
    CommonModule,
    RequestedTrainingRoutingModule,
    TableModule,
    MatSelectModule
  ]
})
export class RequestedTrainingModule { }
