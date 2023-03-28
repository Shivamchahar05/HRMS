import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path:"", component:LayoutComponent,
    children: [
      { path: '', redirectTo: "home", pathMatch: 'full' },
      {
        path: "home",
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path:"my-profile",
        loadChildren:()=>import('./myprofile/myprofile.module').then(m=>m.MyprofileModule)
      },
      {
        path:"directory",
        loadChildren:()=>import('./directory/directory.module').then(m=>m.DirectoryModule)
      },
      {
        path:"Entrepreneurship_Program",
        loadChildren:()=>import('./Entrepreneurship_Program/explore/explore.module').then(m=>m.ExploreModule)
      },
      {
        path:"add_pitch",
        loadChildren:()=>import('./Entrepreneurship_Program/add-pitch/add-pitch.module').then(m=>m.AddPitchModule)
      },
      {
        path:"",
        loadChildren:()=>import('./my-links/my-links.module').then(m=>m.MyLinksModule)
      },
      {
        path:"",
        loadChildren:()=>import('./finance/finance.module').then(m=>m.FinanceModule)
      },
      {
        path:"",
        loadChildren:()=>import('./reviews/reviews.module').then(m=>m.ReviewsModule)
      },
      {
        path:"",
        loadChildren:()=>import('./refer-friend/refer-friend.module').then(m=>m.ReferFriendModule)
      },
      {
        path:"",
        loadChildren:()=>import('./fresher-training/fresher-training.module').then(m=>m.FresherTrainingModule)
      },
      {
        path:"",
        loadChildren:()=>import('./recruitment/recruitment.module').then(m=>m.RecruitmentModule)
      },
      {
        path:"",
        loadChildren:()=>import('./training/training.module').then(m=>m.TrainingModule)
      },
      {
        path:"",
        loadChildren:()=>import('./assets-inventory/assets-inventory.module').then(m=>m.AssetsInventoryModule)
      },
      {
        path:"",
        loadChildren:()=>import('./attendance/attendance.module').then(m=>m.AttendanceModule)
      },
      {
        path:"",
        loadChildren:()=>import('./leave/leave.module').then(m=>m.LeaveModule)
      },
      {
        path:"",
        loadChildren:()=>import('./tickets/tickets.module').then(m=>m.TicketsModule)
      },
      {
        path:"",
        loadChildren:()=>import('./dsr/dsr.module').then(m=>m.DsrModule)
      },
      {
        path:"project",
        loadChildren:()=>import('./project/project.module').then(m=>m.ProjectModule)
      },
      {
        path:"project-details",
        loadChildren:()=>import('./project-details/project-details.module').then(m=>m.ProjectDetailsModule)
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
