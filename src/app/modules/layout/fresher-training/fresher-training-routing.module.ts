import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FresherTrainingComponent } from './fresher-training.component';

const routes: Routes = [
  {
    path:"", component:FresherTrainingComponent,
    children: [
      {
        path: "my-training",
        loadChildren: () =>
          import('./my-training/my-training.module').then((m) => m.MyTrainingModule),
      },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FresherTrainingRoutingModule { }
