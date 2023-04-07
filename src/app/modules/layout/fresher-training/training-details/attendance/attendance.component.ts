import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  datasource = new MatTableDataSource<any>();
  headings = [
    { heading: 'S.No', key: 'sno', type: 'text', sort: true},
    { heading: 'Topic', key: 'topic', type: 'text', sort:true },
    { heading: 'Date', key: 'Date', type: 'text',sort: true },
    { heading: 'Attendance', key: 'Attendance', type: 'text',sort: true },
  ]

  Table_DATA: any[] = [
    {sno:"1",topic:"Introduction",Date:"Feb-28-2022",Attendance:"Present"},
    {sno:"1",topic:"Introduction",Date:"Feb-28-2022",Attendance:"Present"},
    {sno:"1",topic:"Introduction",Date:"Feb-28-2022",Attendance:"Present"},
    {sno:"1",topic:"Introduction",Date:"Feb-28-2022",Attendance:"Present"},
    {sno:"1",topic:"Introduction",Date:"Feb-28-2022",Attendance:"Present"},
    {sno:"1",topic:"Introduction",Date:"Feb-28-2022",Attendance:"Present"},
    {sno:"1",topic:"Introduction",Date:"Feb-28-2022",Attendance:"Present"},
  ]
  constructor() { }

  ngOnInit(): void {
    this.datasource = new MatTableDataSource<any>(this.Table_DATA)
  }


}
