import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyLinksComponent } from './my-links.component';

const routes: Routes = [
  {
    path:"", component:MyLinksComponent,
    children: [
      {
        path: "insurence-verification",
        loadChildren: () =>
          import('./insurence-verfication-detail/insurence-verfication-detail.module').then((m) => m.InsurenceVerficationDetailModule),
      },
      {
        path:"holiday-calender",
        loadChildren:()=>import('./holiday-calender/holiday-calender.module').then(m=>m.HolidayCalenderModule)
      },
      {
        path:"policy-document",
        loadChildren:()=>import('./policy-document/policy-document.module').then(m=>m.PolicyDocumentModule)
      },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLinksRoutingModule { }
