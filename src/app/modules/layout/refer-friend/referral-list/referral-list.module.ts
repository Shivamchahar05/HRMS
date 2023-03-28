import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralListRoutingModule } from './referral-list-routing.module';
import { ReferralListComponent } from './referral-list.component';
import { TableModule } from 'src/app/common_table/table/table.module';

@NgModule({
  declarations: [
    ReferralListComponent
  ],
  imports: [
    CommonModule,
    ReferralListRoutingModule,
    TableModule
  ]
})
export class ReferralListModule { }
