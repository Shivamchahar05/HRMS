import {  Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { JobDetailsService } from 'src/app/services/job-details.service';

@Component({
  selector: 'app-emp-dsr-detail',
  templateUrl: './emp-dsr-detail.component.html',
  styleUrls: ['./emp-dsr-detail.component.scss']
})
export class EmpDsrDetailComponent implements OnInit {
  dsr_details:any
  datasource = new MatTableDataSource<any>();
  val:any
  headings = [
   
    { heading: '#', key: 'S_NO', type: 'text', sort: true },
    { heading: 'Project Name', key: 'Project_Name', type: 'text', sort: true },
    { heading: 'Dsr', key: 'Dsr', type: 'html', sort: true },
    { heading: 'Status', key: 'Status', type: 'text', sort: true },
    { heading: 'PM Approval', key: 'PM_Approval', type: 'text', sort: true },
    { heading: 'AM Approval', key: 'AM_Approval', type: 'text', sort: true },
    { heading: 'RM Approval', key: 'RM_Approval', type: 'text', sort: true },
    { heading: 'Final Approval', key: 'final', type: 'text', sort: true, },
    { heading: 'Logged Hrs', key: 'Hrs', type: 'text', sort: true },
    { heading: 'Action', key: 'status', type: 'action', sort: true, action: [3]},

  ]
  
  constructor( private dsr_detail:JobDetailsService,private sanitizer:DomSanitizer) {
   
   }
  data:any;
  Table_DATA: any[]=[]
  
  ngOnInit(): void {
    this.dsr_details=this.dsr_detail.dsr_details
    this.data=`${this.dsr_details.controls?.['dp5'].value}`
   this.val=`${this.dsr_details.controls?.['Description'].value}`; 
    console.log(this.dsr_details,"myy" );
    this.Table_DATA=[
      { S_NO:'1',Project_Name:`${this.dsr_details.controls?.['Project'].value}`,Dsr:`${this.val}`,Status:'Submitted',PM_Approval:'Pending',AM_Approval:'Pending',RM_Approval:'N/A',final:'Pending',Hrs:`${this.dsr_details.controls?.['Hour'].value}`}
    ]
    this.datasource = new MatTableDataSource<any>(this.Table_DATA)
   
    
  }

}
