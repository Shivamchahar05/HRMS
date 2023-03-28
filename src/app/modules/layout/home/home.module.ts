import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { JobOpeningComponent } from 'src/app/components/job-opening/job-opening.component';
import {MatIconModule} from '@angular/material/icon';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewMemberComponent } from 'src/app/components/new-member/new-member.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LatestAppinventivComponent } from 'src/app/components/latest-appinventiv/latest-appinventiv.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ReferCandidateComponent } from 'src/app/dialogs/refer-candidate/refer-candidate.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { AwardsComponent } from 'src/app/components/latest-appinventiv/awards/awards.component';
import { BirthdayComponent } from 'src/app/components/latest-appinventiv/birthday/birthday.component';
import { AppreciationComponent } from 'src/app/components/latest-appinventiv/appreciation/appreciation.component';
import { GalaryDialogComponent } from 'src/app/dialogs/galary-dialog/galary-dialog.component';
@NgModule({
  declarations: [
    HomeComponent,
    JobOpeningComponent,
    NewMemberComponent,
    LatestAppinventivComponent,
    ReferCandidateComponent,
    AwardsComponent,
    BirthdayComponent,
    AppreciationComponent,
    GalaryDialogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    IvyCarouselModule,
    NgbModule,
    CarouselModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
    
  
  ]
})
export class HomeModule { }
