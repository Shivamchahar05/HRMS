import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingTrainingRoutingModule } from './upcoming-training-routing.module';
import { UpcomingTrainingComponent } from './upcoming-training.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    UpcomingTrainingComponent
  ],
  imports: [
    CommonModule,
    UpcomingTrainingRoutingModule,
    MatSnackBarModule
  ]
})
export class UpcomingTrainingModule { }
