import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-referral-list',
  templateUrl: './referral-list.component.html',
  styleUrls: ['./referral-list.component.scss']
})
export class ReferralListComponent implements OnInit {
  
  datasource = new MatTableDataSource<any>();
  headings = [
    { heading: 'S.No', key: 'status', type: 'text', sort: true, action: []},
    { heading: 'Candidate Name', key: 'SUName', type: 'link', link: '', sort:true },
    { heading: 'Experience', key: 'Time_Period', type: 'text',sort: true },
    { heading: 'Department', key: 'ElName', type: 'text',sort: true },
    { heading: 'Position', key: 'position', type: 'text',sort: true },
    { heading: 'Date of Referral', key: 'DOR', type: 'text',sort: true },
    { heading: 'Candidate Status', key: 'candidate_status', type: 'text',sort: true },
    { heading: 'Resume/CV', key: 'Resume', type: 'text',sort: true },

  ]
  Table_DATA: any[] = []
    // { 'status': 1, 'SUName': 'abc', 'Time_Period': 'kumar', 'ElName': 'qwe', 'position': 'H@gmail.com', 'DOR': 1324235346547, 'candidate_status': 110044, 'Resume': 'In Progress' },
  
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.datasource = new MatTableDataSource<any>(this.Table_DATA)
  }
  job_open(){
    this.route.navigate(['/layout/job-opening'])
  }
  



}
