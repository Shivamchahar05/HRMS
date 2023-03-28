import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance.component';

const routes: Routes = [
  {
    path: "", component: AttendanceComponent,
    children: [
      {
        path: "attendance-calender",
        loadChildren: () =>
          import('./attendance-calender/attendance-calender.module').then((m) => m.AttendanceCalenderModule),
      },
      {
        path: "manual-punch",
        loadChildren: () =>
          import('./manual-punch/manual-punch.module').then((m) => m.ManualPunchModule),
      },
      {
        path: "punch-log",
        loadChildren: () =>
          import('./punch-log/punch-log.module').then((m) => m.PunchLogModule),
      },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
