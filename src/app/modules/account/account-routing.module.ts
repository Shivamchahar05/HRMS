import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FORGET_PASSWORD, LOGIN } from 'src/app/constants/router';
import { AccountComponent } from './account.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: '', redirectTo: LOGIN.baseUrl, pathMatch: 'full' },

      {
        path: LOGIN.baseUrl,
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),
      },
      {
        path:FORGET_PASSWORD.baseUrl,
        loadChildren:()=>import('./forget-password/forget-password.module').then(m=>m.ForgetPasswordModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
