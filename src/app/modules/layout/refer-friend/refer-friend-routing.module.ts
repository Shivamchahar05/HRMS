import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferFriendComponent } from './refer-friend.component';

const routes: Routes = [
  {
    path:"", component:ReferFriendComponent,
    children: [
      {
        path: "job-opening",
        loadChildren: () =>
          import('./job-opening/job-opening.module').then((m) => m.JobOpeningModule),
      },
      {
        path:"referral-list",
        loadChildren:()=>import('./referral-list/referral-list.module').then(m=>m.ReferralListModule)
      },
      {
        path:"job-details",
        loadChildren:()=>import('./job-details/job-details.module').then(m=>m.JobDetailsModule)
      }
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferFriendRoutingModule { }
