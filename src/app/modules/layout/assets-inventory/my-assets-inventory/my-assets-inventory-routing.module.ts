import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAssetsInventoryComponent } from './my-assets-inventory.component';

const routes: Routes = [
  {
    path:"" , component:MyAssetsInventoryComponent, pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAssetsInventoryRoutingModule { }
