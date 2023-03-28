import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingComponent } from './training.component';

const routes: Routes = [
  {
    path:"", component:TrainingComponent,
    children: [
      // { path: '', redirectTo: "upcoming_training", pathMatch: 'full' },

      {
        path: "upcoming_training",
        loadChildren: () =>
          import('./upcoming-training/upcoming-training.module').then((m) => m.UpcomingTrainingModule),
      },
      {
        path: "ongoing_training",
        loadChildren: () =>
          import('./ongoing-training/ongoing-training.module').then((m) => m.OngoingTrainingModule),
      },
      {
        path:"my_training",
        loadChildren: () =>
          import('./my-training/my-training.module').then((m) => m.MyTrainingModule),
      },
      {
        path:"requested-training",
        loadChildren: () =>
          import('./requested-training/requested-training.module').then((m) => m.RequestedTrainingModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
