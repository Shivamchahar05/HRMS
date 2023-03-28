import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-asset-declaration',
  templateUrl: './asset-declaration.component.html',
  styleUrls: ['./asset-declaration.component.scss']
})
export class AssetDeclarationComponent implements OnInit {
  asset:any
  TableClass:any
  add_request=false
  searchText:any
  datasource = new MatTableDataSource<any>();
  headings = [
    { heading: 'S.No', key: 'S_No', type: 'text', sort: true,},
    { heading: 'Employee Id', key: '	Employee_Id', type: 'text', sort:true },
    { heading: 'Unique Asset Code', key: 'Unique_Asset_Code', type: 'text',sort: true },
    { heading: '	Serial Number', key: '	Serial_Number', type: 'text',sort: true },
    { heading: 'Model Number', key: 'Model_Number', type: 'text',sort: true },
    { heading: 'OS', key: 'OS', type: 'text',sort: true },
    { heading: 'OS version', key: 'os_version', type: 'text',sort: true },
    { heading: 'Brand', key: 'Brand', type: 'text',sort: true },
    { heading: 'Colour', key: 'Colour', type: 'text',sort: true },
    { heading: 'Images', key: 'Images', type: 'text',sort: true },
    { heading: 'Is Working', key: 'working', type: 'text',sort: true },
    { heading: 'Added', key: 'Added', type: 'text',sort: true },
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
