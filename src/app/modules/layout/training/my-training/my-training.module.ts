import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTrainingRoutingModule } from './my-training-routing.module';
import { MyTrainingComponent } from './my-training.component';


@NgModule({
  declarations: [
    MyTrainingComponent
  ],
  imports: [
    CommonModule,
    MyTrainingRoutingModule
  ]
})
export class MyTrainingModule { }
