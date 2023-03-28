import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DsrComponent } from './dsr.component';

const routes: Routes = [
  {
    path: "", component: DsrComponent,
    children: [

      {
        path: "my-dsr",
        loadChildren: () =>
          import('./my-dsr/my-dsr.module').then((m) => m.MyDsrModule),
      },
      {
        path: "emp-dsr-detail",
        loadChildren: () =>
          import('./emp-dsr-detail/emp-dsr-detail.module').then((m) => m.EmpDsrDetailModule),
      },
      {
        path: "edit-dsr",
        loadChildren: () =>
          import('./update-dsr/update-dsr.module').then((m) => m.UpdateDsrModule),
      },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DsrRoutingModule { }
