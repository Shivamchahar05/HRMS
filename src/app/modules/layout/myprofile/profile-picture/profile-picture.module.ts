import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePictureRoutingModule } from './profile-picture-routing.module';
import { ProfilePictureComponent } from './profile-picture.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    ProfilePictureComponent
  ],
  imports: [
    CommonModule,
    ProfilePictureRoutingModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class ProfilePictureModule { }
