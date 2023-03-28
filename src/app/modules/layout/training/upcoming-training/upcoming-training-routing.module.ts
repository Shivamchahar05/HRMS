import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpcomingTrainingComponent } from './upcoming-training.component';

const routes: Routes = [
  {
    path:"" , component:UpcomingTrainingComponent , pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpcomingTrainingRoutingModule { }
