import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobDetailsRoutingModule } from './job-details-routing.module';
import { JobDetailsComponent } from './job-details.component';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    JobDetailsComponent
  ],
  imports: [
    CommonModule,
    JobDetailsRoutingModule,
    MatIconModule,
    MatMenuModule
    
  ]
})
export class JobDetailsModule { }
