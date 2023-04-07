import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingDetailsUnderComponent } from './training-details-under.component';

const routes: Routes = [
  {
    path:"" , component:TrainingDetailsUnderComponent, pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingDetailsUnderRoutingModule { }
