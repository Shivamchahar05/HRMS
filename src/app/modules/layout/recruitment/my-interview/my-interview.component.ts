import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-my-interview',
  templateUrl: './my-interview.component.html',
  styleUrls: ['./my-interview.component.scss']
})
export class MyInterviewComponent implements OnInit {
  searchText:any
  constructor( private fb:FormBuilder) {}
  datasource = new MatTableDataSource<any>();
  ngOnInit(): void {
    this.datasource = new MatTableDataSource<any>(this.Table_DATA)
  }
  Marital_Status=[
    'Andriod', 'node js' , 'react','Angular'
  ]
  headings = [
    { heading: 'S. No.', key: 's_no', type: 'text', sort: true, },
    { heading: 'Department', key: '	Department', type: 'text', sort:true },
    { heading: 'Name', key: 'Name', type: 'text',sort: true },
    { heading: 'Email', key: 'Email', type: 'text',sort: true },
    { heading: 'Mobile No.', key: 'Mobile_No.', type: 'text',sort: true },
    { heading: 'Round Type', key: 'round', type: 'text',sort: true },
    { heading: 'Interview Date', key: 'Interview_Date', type: 'text',sort: true },
    { heading: 'Interview Time', key: '	Interview_Time', type: 'text',sort: true },
    { heading: 'Final Status', key: '	Final_Status', type: 'text',sort: true },
    { heading: 'Action', key: '	Action', type: 'text',sort: true ,},
  ]
  Table_DATA: any[] = []

}
