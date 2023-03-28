import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsComponent } from './tickets.component';

const routes: Routes = [
  {
    path: "", component: TicketsComponent,
    children: [

      {
        path: "Ticket",
        loadChildren: () =>
          import('./ticket/ticket.module').then((m) => m.TicketModule),
      },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
