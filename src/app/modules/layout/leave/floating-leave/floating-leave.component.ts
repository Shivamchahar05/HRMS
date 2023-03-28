import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-floating-leave',
  templateUrl: './floating-leave.component.html',
  styleUrls: ['./floating-leave.component.scss']
})
export class FloatingLeaveComponent implements OnInit {
  Allocation_type=[ "","Appinventiv Technology",]
  datasource = new MatTableDataSource<any>();
  headings = [
    { heading: 'S. No', key: 's_no', type: 'text', sort: true,},
    { heading: 'Event Name', key: 'event_name', type: 'text', sort:true },
    { heading: 'Date', key: 'Date', type: 'text',sort: true },
  ]
  Table_DATA: any[] = [
    {s_no:"1", event_name:"Janmashtami" , Date:"7th sep, 2023"},
    {s_no:"2", event_name:"Eid al-Adha" , Date:"29th Jun, 2023"}
  ]
  constructor() { }

  ngOnInit(): void {
    this.datasource = new MatTableDataSource<any>(this.Table_DATA)
  }


}
