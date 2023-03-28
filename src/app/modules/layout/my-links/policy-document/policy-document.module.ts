import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyDocumentRoutingModule } from './policy-document-routing.module';
import { PolicyDocumentComponent } from './policy-document.component';
import { TableModule } from 'src/app/common_table/table/table.module';

@NgModule({
  declarations: [
    PolicyDocumentComponent
  ],
  imports: [
    CommonModule,
    PolicyDocumentRoutingModule,
    TableModule
  ]
})
export class PolicyDocumentModule { }
