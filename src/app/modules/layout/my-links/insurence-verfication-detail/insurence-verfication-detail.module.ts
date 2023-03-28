import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsurenceVerficationDetailRoutingModule } from './insurence-verfication-detail-routing.module';
import { InsurenceVerficationDetailComponent } from './insurence-verfication-detail.component';


@NgModule({
  declarations: [
    InsurenceVerficationDetailComponent
  ],
  imports: [
    CommonModule,
    InsurenceVerficationDetailRoutingModule
  ]
})
export class InsurenceVerficationDetailModule { }
