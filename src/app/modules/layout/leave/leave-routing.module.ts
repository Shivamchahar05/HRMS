import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveComponent } from './leave.component';

const routes: Routes = [
  {
    path: "", component: LeaveComponent,
    children: [
      // { path: '', redirectTo: "basic-information", pathMatch: 'full' },

      {
        path: "my-leave",
        loadChildren: () =>
          import('./my-leave/my-leave.module').then((m) => m.MyLeaveModule),
      },
      {
        path: "floating-leave",
        loadChildren: () =>
          import('./floating-leave/floating-leave.module').then((m) => m.FloatingLeaveModule),
      },
      {
        path: "leave-details",
        loadChildren: () =>
          import('./leave-details/leave-details.module').then((m) => m.LeaveDetailsModule),
      },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveRoutingModule { }
