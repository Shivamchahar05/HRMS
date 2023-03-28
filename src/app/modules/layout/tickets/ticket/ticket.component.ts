import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  searchText:any
  addleave=false
  datasource = new MatTableDataSource<any>();
  headings = [
    { heading: 'Action', key: 'status', type: 'text', sort: true, action: []},
    { heading: 'Ticket Code', key: 'Ticket_Code', type: 'text', sort:true },
    { heading: 'Priority', key: 'Priority', type: 'text',sort: true },
    { heading: 'Employee', key: 'Employee', type: 'text',sort: true },
    { heading: 'Subject', key: 'Subject', type: 'text',sort: true },
    { heading: 'Status', key: 'Status', type: 'text',sort: true },
    { heading: 'Date', key: 'Date', type: 'text',sort: true },
   
  ]

  Table_DATA: any[] = []
  constructor() { }

  ngOnInit(): void {
  }
  Leave_type=["Planned Leave(CL)", "Privileged Leave","Emergency Leave(CL)","Short Leave","All Remaining leaves"]
  add_leave(){
    this.addleave=!this.addleave
  }

}
