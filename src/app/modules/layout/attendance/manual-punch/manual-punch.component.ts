import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-manual-punch',
  templateUrl: './manual-punch.component.html',
  styleUrls: ['./manual-punch.component.scss']
})
export class ManualPunchComponent implements OnInit {
  Allocation_type=[ "","Appinventiv Technology",]
  datasource = new MatTableDataSource<any>();
  headings = [
    { heading: 'Edit', key: 'edit', type: 'text', sort: true,},
    { heading: 'Manual Punch Date', key: '	punch_date', type: 'text', sort:true },
    { heading: 'In Time', key: 'in_time', type: 'text',sort: true },
    { heading: 'Out Time', key: '	out_time', type: 'text',sort: true },
  ]
  Table_DATA: any[] = [
    // {Asset_Name:"LAPTOP", Assets_Category:"Laptop",Asset_Code:"L0068", brand:"HP",Serial_no:"5CG9322W1Y", Model:"ZBOOK",Working:"Yes",Company:"Appinventiv Technology"}
  ]
  constructor() { }

  ngOnInit(): void {
    this.datasource = new MatTableDataSource<any>(this.Table_DATA)
  }

}
