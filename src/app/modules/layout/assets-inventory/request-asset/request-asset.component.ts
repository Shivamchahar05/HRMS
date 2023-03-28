import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-request-asset',
  templateUrl: './request-asset.component.html',
  styleUrls: ['./request-asset.component.scss']
})
export class RequestAssetComponent implements OnInit {
  TableClass:any
  add_request=false
  searchText:any
  datasource = new MatTableDataSource<any>();
  headings = [
    { heading: 'S.No', key: 'S_No', type: 'text', sort: true,},
    { heading: 'Status', key: '	Status', type: 'text', sort:true },
    { heading: 'Request Reason', key: 'Request_Reason', type: 'text',sort: true },
    { heading: 'Priority', key: 'Priority', type: 'text',sort: true },
    { heading: 'Requested At', key: 'Requested_At', type: 'text',sort: true },
    { heading: 'Assets Category', key: 'Assets_Category', type: 'text',sort: true },
    { heading: 'Allocation type', key: 'Allocation_type', type: 'text',sort: true },
    { heading: 'Company', key: 'Company', type: 'text',sort: true },
  ]

  Table_DATA: any[] = [
    // {Asset_Name:"LAPTOP", Assets_Category:"Laptop",Asset_Code:"L0068", brand:"HP",Serial_no:"5CG9322W1Y", Model:"ZBOOK",Working:"Yes",Company:"Appinventiv Technology"}
  ]
  constructor() { }

  ngOnInit(): void {
    this.datasource = new MatTableDataSource<any>(this.Table_DATA)
  }
  new_request(){
   this.add_request = !this.add_request
    
  }
  assets_category=["Laptop", "Desktop", "Mobile"]
  Quantity=["1", "2", "3", "4", "5"]
  Priority=["Low" , "Medium", "High"]
  Allocation_type=["Permanent", "Temporary"]

}
