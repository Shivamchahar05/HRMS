import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dsr-reports',
  templateUrl: './dsr-reports.component.html',
  styleUrls: ['./dsr-reports.component.scss']
})
export class DSRReportsComponent implements OnInit {
  searchText:any;
  datasource = new MatTableDataSource<any>();
  headings = [
    { heading: 'Sr.No.', key: 'Sr_No.', type: 'text', sort: true},
    { heading: 'Emp Name', key: 'Emp_name', type: 'text', sort:true },
    { heading: 'EmpId', key: 'empid', type: 'text',sort: true },
    { heading: 'Date', key: 'date', type: 'text',sort: true },
    { heading: 'Status', key: 'status', type: 'text',sort: true },
    { heading: 'PM Approval', key: 'pm_approval', type: 'text',sort: true },
    { heading: 'AM Approval', key: 'am_approval', type: 'text',sort: true },
    { heading: 'RM Approval', key: 'rm_approval', type: 'text',sort: true },
    { heading: 'Total(Logged Hr)', key: 'rm_approval', type: 'text',sort: true },
    { heading: 'Final Approval', key: 'Final_approval', type: 'text',sort: true },
  ]

  Table_DATA: any[] = []
  Leave_type=["Planned Leave(CL)", "Privileged Leave","Emergency Leave(CL)","Short Leave","All Remaining leaves"]
  constructor() { }

  ngOnInit(): void {
  }

}
