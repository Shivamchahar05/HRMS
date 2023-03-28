import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsurenceVerficationDetailComponent } from './insurence-verfication-detail.component';

const routes: Routes = [
  {
    path:"" , component:InsurenceVerficationDetailComponent , pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsurenceVerficationDetailRoutingModule { }
