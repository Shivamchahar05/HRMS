import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpDsrDetailComponent } from './emp-dsr-detail.component';

const routes: Routes = [
  {
    path:"" , component:EmpDsrDetailComponent, pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpDsrDetailRoutingModule { }
