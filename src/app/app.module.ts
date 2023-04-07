import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './components/page-not-found.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
// import { MatOptionModule } from '@angular/material/core';
// import { MatSelectModule } from '@angular/material/select';
import {MatSelectModule} from '@angular/material/select';
import { CancelEnrollComponent } from './dialogs/cancel-enroll/cancel-enroll.component';
import { HelpDialogComponent } from './dialogs/help-dialog/help-dialog.component';
import { RequestTrainingComponent } from './dialogs/request-training/request-training.component';





@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CancelEnrollComponent,
    HelpDialogComponent,
    RequestTrainingComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
