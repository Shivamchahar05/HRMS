import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-punch-log',
  templateUrl: './punch-log.component.html',
  styleUrls: ['./punch-log.component.scss']
})
export class PunchLogComponent implements OnInit {
  Allocation_type=[ "","Appinventiv Technology",]
  datasource = new MatTableDataSource<any>();
  headings = [
    { heading: 'Name', key: 'name', type: 'text', sort: true,},
    { heading: 'Punch Time', key: 'Punch Time', type: 'text', sort:true },
    { heading: 'Direction', key: 'Direction', type: 'text',sort: true },
  ]
  Table_DATA: any[] = []
  constructor() { }

  ngOnInit(): void {
    this.datasource = new MatTableDataSource<any>(this.Table_DATA)
  }

}
