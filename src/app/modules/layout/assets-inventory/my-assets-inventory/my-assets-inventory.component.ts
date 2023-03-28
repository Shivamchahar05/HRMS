import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-my-assets-inventory',
  templateUrl: './my-assets-inventory.component.html',
  styleUrls: ['./my-assets-inventory.component.scss']
})
export class MyAssetsInventoryComponent implements OnInit {
  TableClass:any
  datasource = new MatTableDataSource<any>();
  headings = [
    { heading: 'Asset Name', key: 'Asset_Name', type: 'text', sort: true,},
    { heading: 'Assets Category', key: 'Assets_Category', type: 'text', sort:true },
    { heading: 'Company Asset Code', key: 'Asset_Code', type: 'text',sort: true },
    { heading: 'Brand', key: 'brand', type: 'text',sort: true },
    { heading: 'Serial No.', key: 'Serial_no', type: 'text',sort: true },
    { heading: 'Model', key: 'Model', type: 'text',sort: true },
    { heading: 'Is Working?', key: 'Working', type: 'text',sort: true },
    { heading: 'Company', key: 'Company', type: 'text',sort: true },
  ]

  Table_DATA: any[] = [
    {Asset_Name:"LAPTOP", Assets_Category:"Laptop",Asset_Code:"L0068", brand:"HP",Serial_no:"5CG9322W1Y", Model:"ZBOOK",Working:"Yes",Company:"Appinventiv Technology"}
  ]
  constructor() { }

  ngOnInit(): void {
    this.datasource = new MatTableDataSource<any>(this.Table_DATA)
  }

}
