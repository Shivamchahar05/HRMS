import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTrainingRoutingModule } from './my-training-routing.module';
import { MyTrainingComponent } from './my-training.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrainingFeedbackComponent } from 'src/app/dialogs/training-feedback/training-feedback.component';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    MyTrainingComponent,
    TrainingFeedbackComponent
  ],
  imports: [
    CommonModule,
    MyTrainingRoutingModule,
    MatDialogModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatIconModule
  ]
})
export class MyTrainingModule { }
