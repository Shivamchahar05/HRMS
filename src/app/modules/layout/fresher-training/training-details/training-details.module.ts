import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingDetailsRoutingModule } from './training-details-routing.module';
import { TrainingDetailsComponent } from './training-details.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    TrainingDetailsComponent
  ],
  imports: [
    CommonModule,
    TrainingDetailsRoutingModule,
    MatTabsModule,
    MatIconModule
  ]
})
export class TrainingDetailsModule { }
