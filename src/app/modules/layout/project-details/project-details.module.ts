import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectDetailsRoutingModule } from './project-details-routing.module';
import { ProjectDetailsComponent } from './project-details.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { OverviewComponent } from 'src/app/components/overview/overview.component';
import { NotesComponent } from 'src/app/components/notes/notes.component';
import { DSRReportsComponent } from 'src/app/components/dsr-reports/dsr-reports.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { TableModule } from 'src/app/common_table/table/table.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { ProjectTagsComponent } from 'src/app/dialogs/project-tags/project-tags.component';


@NgModule({
  declarations: [
    ProjectDetailsComponent,
    OverviewComponent,
    NotesComponent,
    DSRReportsComponent,
    ProjectTagsComponent,
  ],
  imports: [
    CommonModule,
    ProjectDetailsRoutingModule,
    MatTabsModule,
    MatIconModule,
    TableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule

   
    
  ]
})
export class ProjectDetailsModule { }
