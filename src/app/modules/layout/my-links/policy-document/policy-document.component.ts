import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { POLICY_DETAILS } from 'src/app/constants/policy_details';

@Component({
  selector: 'app-policy-document',
  templateUrl: './policy-document.component.html',
  styleUrls: ['./policy-document.component.scss']
})
export class PolicyDocumentComponent implements OnInit {
  datasource = new MatTableDataSource<any>();
  headings = [
    { heading: '#', key: 'no', type: 'text'},
    { heading: 'Name', key: 'name', type: 'text' },
    { heading: 'Type', key: 'type', type: 'text' },
    { heading: 'File Size', key: 'size', type: 'text'},
    { heading: 'Last Modified', key: 'Modified', type: 'text'},
    { heading: 'Action', key: 'status', type: 'action', action: [1] , link: 'url' }
  ]
  Table_DATA: any[] = []
  constructor() { }

  ngOnInit(): void {
    this.Table_DATA=POLICY_DETAILS;
    this.datasource = new MatTableDataSource<any>(this.Table_DATA)
  }

}
