import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTrainingRoutingModule } from './my-training-routing.module';
import { MyTrainingComponent } from './my-training.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    MyTrainingComponent
  ],
  imports: [
    CommonModule,
    MyTrainingRoutingModule,
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class MyTrainingModule { }
