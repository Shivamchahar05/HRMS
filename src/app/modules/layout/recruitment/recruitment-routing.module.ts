import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecruitmentComponent } from './recruitment.component';

const routes: Routes = [
  {
    path:"", component:RecruitmentComponent,
    children: [
      {
        path: "My Interview",
        loadChildren: () =>
          import('./my-interview/my-interview.module').then((m) => m.MyInterviewModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitmentRoutingModule { }
