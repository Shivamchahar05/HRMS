import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetDeclarationComponent } from './asset-declaration.component';

const routes: Routes = [
  {
    path:"" , component:AssetDeclarationComponent, pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetDeclarationRoutingModule { }
