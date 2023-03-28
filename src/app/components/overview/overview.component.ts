import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  datasource = new MatTableDataSource<any>();
  Datasource=new MatTableDataSource<any>();
  headings1st = [
    { heading: 'Milestones', key: 'milestone', type: 'text', sort: true},
    { heading: 'Release', key: 'release', type: 'text', sort:true },
    { heading: 'Description', key: 'Description', type: 'text',sort: true },
    { heading: 'Into QA Date', key: 'Into', type: 'text',sort: true },
    { heading: 'Internal Demo Date', key: 'Internal', type: 'text',sort: true },
    { heading: 'Release Date', key: 'Release', type: 'text',sort: true },
    { heading: 'Delivery Status', key: 'Delivery', type: 'text',sort: true },
    { heading: 'SignOff Status', key: 'SignOff', type: 'text',sort: true },
  ]
  headings2nd = [
    { heading: 'Name', key: 'name', type: 'text', sort: true},
    { heading: 'Allocated As', key: 'Allocated', type: 'text', sort:true },
    { heading: 'Department', key: 'Department', type: 'text',sort: true },
    { heading: 'Alloc Hrs', key: 'Alloc', type: 'text',sort: true },
    { heading: 'Exp', key: 'exp', type: 'text',sort: true },
    { heading: 'Relevant Exp', key: 'Release', type: 'text',sort: true },
    { heading: 'Hrs Log', key: 'Hrs', type: 'text',sort: true },
  ]
  
  Table_DATA1st:any[]=[
    {milestone:"M1",release:"-",Description:"-",Into:"-",Internal:"-",Release:"-"}
  ]
  Table_DATA2nd: any[] = [
    {name:"Shivam chahar  ",Allocated:"Resource",Department:"	Angular",Alloc:"8.00",exp:"0.10",Release:"0.5",Hrs:"1999:40"},
    {name:"Shivam chahar  ",Allocated:"Resource",Department:"	Angular",Alloc:"8.00",exp:"0.10",Release:"0.5",Hrs:"1999:40"},
    {name:"Shivam chahar  ",Allocated:"Resource",Department:"	Angular",Alloc:"8.00",exp:"0.10",Release:"0.5",Hrs:"1999:40"},
    {name:"Shivam chahar  ",Allocated:"Resource",Department:"	Angular",Alloc:"8.00",exp:"0.10",Release:"0.5",Hrs:"1999:40"},
    {name:"Shivam chahar  ",Allocated:"Resource",Department:"	Angular",Alloc:"8.00",exp:"0.10",Release:"0.5",Hrs:"1999:40"}

  ]
  constructor() { }

  ngOnInit(): void {
    this.datasource = new MatTableDataSource<any>(this.Table_DATA2nd)
    this.Datasource = new MatTableDataSource<any>(this.Table_DATA1st)
  }

}
