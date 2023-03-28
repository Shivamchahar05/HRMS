import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-requested-training',
  templateUrl: './requested-training.component.html',
  styleUrls: ['./requested-training.component.scss']
})
export class RequestedTrainingComponent implements OnInit {
  request:any
  datasource = new MatTableDataSource<any>();
  headings = [
    
    { heading: 'S. No', key: 'sno', type: 'text', sort:true },
    { heading: 'Training Name', key: 'Time_Period', type: 'text',sort: true },
    { heading: 'Timeline to conduct', key: 'timeline', type: 'text',sort: true },
    { heading: 'Requested date', key: 'request_date', type: 'text',sort: true },
    { heading: 'Status', key: 'Status', type: 'text',sort: true },
    { heading: 'Action', key: 'status', type: 'text', sort: true, action: []},
  ]

  Table_DATA: any[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
