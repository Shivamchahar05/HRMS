import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateDsrComponent } from './update-dsr.component';

const routes: Routes = [
  {
    path:"" , component:UpdateDsrComponent , pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateDsrRoutingModule { }
