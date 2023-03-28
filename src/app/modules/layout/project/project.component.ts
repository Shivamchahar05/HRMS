import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  datasource = new MatTableDataSource<any>();
  headings = [
    // { heading: 'Action', key: 'status', type: 'text', sort: true, action: []},
    { heading: 'Project Name', key: 'Project_Name', type: 'link', sort:true ,link:'/layout/project-details'},
    { heading: 'Billing Type', key: 'Billing_Type', type: 'text',sort: true },
    { heading: 'Resources', key: 'Resources', type: 'text',sort: true },
    { heading: 'Hrs.', key: 'Hrs', type: 'text',sort: true },
    { heading: 'Total Milestone', key: 'Total_Milestone', type: 'text',sort: true },
    { heading: 'Delivered', key: 'Delivered', type: 'text',sort: true },
    { heading: 'Pending', key: 'Pending', type: 'text',sort: true },
    { heading: '%Complete', key: 'Complete', type: 'text',sort: true },
  ]

  Table_DATA: any[] = [
    {Project_Name:"Training Project React JS",Billing_Type:"",Resources:"11",Hrs:"1805103",Total_Milestone:"1",Delivered:"0",Pending:"1",Complete:"0%"}
  ]

  constructor() { }

  ngOnInit(): void {
    this.datasource = new MatTableDataSource<any>(this.Table_DATA)
  }

}
