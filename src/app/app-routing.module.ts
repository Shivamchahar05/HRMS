import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { ACCOUNT, LAYOUT } from './constants/router';


const routes: Routes = [
  { path: '', redirectTo: ACCOUNT.baseUrl, pathMatch: 'full' },
   {
    path: ACCOUNT.baseUrl,
    loadChildren: () =>
      import('./modules/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: LAYOUT.baseUrl,
    loadChildren: () =>
      import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
