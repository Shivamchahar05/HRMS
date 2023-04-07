import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubTopicsComponent } from './sub-topics.component';

const routes: Routes = [
  {
    path:"" , component:SubTopicsComponent, pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubTopicsRoutingModule { }
