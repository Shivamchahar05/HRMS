import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyprofileComponent } from './myprofile.component';

const routes: Routes = [
  {
    path: "", component: MyprofileComponent,
    children: [
      { path: '', redirectTo: "basic-information", pathMatch: 'full' },

      {
        path: "basic-information",
        loadChildren: () =>
          import('./basic-information/basic-information.module').then((m) => m.BasicInformationModule),
      },
      {
        path: "profile-picture",
        loadChildren: () => import('./profile-picture/profile-picture.module').then(m => m.ProfilePictureModule)
      },
      {
        path: "qualification",
        loadChildren: () => import('./qualification/qualification.module').then(m => m.QualificationModule)
      },
      {
        path: "shift",
        loadChildren: () => import('./shift/shift.module').then(m => m.ShiftModule)
      },
      {
        path: "change-password",
        loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordModule)
      },
      {
        path: "appraisal",
        loadChildren: () => import('./appraisal/appraisal.module').then(m => m.AppraisalModule)
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyprofileRoutingModule { }
