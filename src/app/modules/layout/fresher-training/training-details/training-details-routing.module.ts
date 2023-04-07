import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingDetailsComponent } from './training-details.component';

const routes: Routes = [
  {
    path:"" , component:TrainingDetailsComponent , 
    children: [
      {path:"" , redirectTo:"training-details-under", pathMatch:"full"},
      {
        path: "training-details-under",
        loadChildren: () =>
          import('./training-details-under/training-details-under.module').then((m) => m.TrainingDetailsUnderModule),
      },
      {
        path: "sub-topics",
        loadChildren: () =>
          import('./sub-topics/sub-topics.module').then((m) => m.SubTopicsModule),
      },
      {
        path: "attendance",
        loadChildren: () =>
          import('./attendance/attendance.module').then((m) => m.AttendanceModule),
      },
    ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingDetailsRoutingModule { }
