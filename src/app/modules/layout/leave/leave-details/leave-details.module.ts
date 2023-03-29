import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveDetailsRoutingModule } from './leave-details-routing.module';
import { LeaveDetailsComponent } from './leave-details.component';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    LeaveDetailsComponent
  ],
  imports: [
    CommonModule,
    LeaveDetailsRoutingModule,
    MatSliderModule
  ]
})
export class LeaveDetailsModule { }
