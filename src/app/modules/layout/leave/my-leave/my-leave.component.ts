import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.scss']
})
export class MyLeaveComponent implements OnInit {
  searchText:any
  halfdays=false
  addleave=false
  datasource = new MatTableDataSource<any>();
  headings = [
    { heading: 'Action', key: 'status', type: 'text', sort: true, action: []},
    { heading: 'Leave Type', key: 'leave_type', type: 'text', sort:true },
    { heading: 'Request Form', key: 'Request_form', type: 'text',sort: true },
    { heading: 'Request To', key: 'Request_to', type: 'text',sort: true },
    { heading: 'Applied On', key: 'Applied_on', type: 'text',sort: true },
    { heading: 'Status', key: 'Status', type: 'text',sort: true },
    { heading: 'Level 1', key: 'Level_1', type: 'text',sort: true },
    { heading: 'Level 2', key: 'Level_2', type: 'text',sort: true },
  ]

  Table_DATA: any[] = []
  constructor() { }

  ngOnInit(): void {
  }
  Leave_type=["Planned Leave(CL)", "Privileged Leave","Emergency Leave(CL)","Short Leave","All Remaining leaves"]
  employeeLeaves = [
    { type: 'Planned Leave(CL)', total: 6.00, claimed: 0 },
    { type: 'Privileged Leave', total: 6.00, claimed: 0 },
    { type: 'Emergency Leave(CL)', total: 6.00, claimed: 0 },
    { type: 'Short Leave', total: 10.00, claimed: 0 },
  ];
  halfday(){
    this.halfdays=!this.halfdays
  }
  add_leave(){
    this.addleave=!this.addleave
  }

}
