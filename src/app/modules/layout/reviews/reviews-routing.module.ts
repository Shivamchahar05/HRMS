import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewsComponent } from './reviews.component';

const routes: Routes = [
  {
    path:"", component:ReviewsComponent,
    children: [
      {
        path: "my-performance",
        loadChildren: () =>
          import('./my-performance/my-performance.module').then((m) => m.MyPerformanceModule),
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
