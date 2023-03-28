import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAssetsInventoryRoutingModule } from './my-assets-inventory-routing.module';
import { MyAssetsInventoryComponent } from './my-assets-inventory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { TableModule } from 'src/app/common_table/table/table.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    MyAssetsInventoryComponent
  ],
  imports: [
    CommonModule,
    MyAssetsInventoryRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    MatSelectModule,
    TableModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MyAssetsInventoryModule { }
