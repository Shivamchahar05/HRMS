import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsInventoryComponent } from './assets-inventory.component';

const routes: Routes = [
  {
    path: "", component: AssetsInventoryComponent,
    children: [
      // { path: '', redirectTo: "basic-information", pathMatch: 'full' },

      {
        path: "my-assets-inventory",
        loadChildren: () =>
          import('./my-assets-inventory/my-assets-inventory.module').then((m) => m.MyAssetsInventoryModule),
      },
      {
        path: "asset-declaration",
        loadChildren: () =>
          import('./asset-declaration/asset-declaration.module').then((m) => m.AssetDeclarationModule),
      },
      {
        path: "request-asset",
        loadChildren: () =>
          import('./request-asset/request-asset.module').then((m) => m.RequestAssetModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsInventoryRoutingModule { }
