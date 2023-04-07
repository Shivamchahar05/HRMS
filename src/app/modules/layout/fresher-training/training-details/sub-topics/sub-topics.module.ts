import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubTopicsRoutingModule } from './sub-topics-routing.module';
import { SubTopicsComponent } from './sub-topics.component';
import { TableModule } from 'src/app/common_table/table/table.module';


@NgModule({
  declarations: [
    SubTopicsComponent
  ],
  imports: [
    CommonModule,
    SubTopicsRoutingModule,
    TableModule
  ]
})
export class SubTopicsModule { }
