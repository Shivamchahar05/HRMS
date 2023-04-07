import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { JobDetailsService } from 'src/app/services/job-details.service';

@Component({
  selector: 'app-training-details-under',
  templateUrl: './training-details-under.component.html',
  styleUrls: ['./training-details-under.component.scss']
})
export class TrainingDetailsUnderComponent implements OnInit {
  datasource = new MatTableDataSource<any>();
  headings = [
    { heading: 'S.No', key: 'sno', type: 'text', sort: true},
    { heading: 'Topic', key: 'topic', type: 'text', sort:true },
    { heading: 'Topic Trainer', key: 'Topic_Trainer', type: 'text',sort: true },
    { heading: 'Trainer Email', key: 'Trainer_Email', type: 'text',sort: true },
    { heading: 'Start Date', key: 'Start_Date', type: 'text',sort: true },
    { heading: 'End Date', key: 'End_Date', type: 'text',sort: true },
    { heading: 'Resource URL', key: 'Resource', type: 'text',sort: true },
  ]

  Table_DATA: any[] = [
    {sno:"1",topic:"Introduction",Topic_Trainer:"Sandeep Gupta",Trainer_Email:"Sndeep.Gupta@appinventiv.com",Start_Date:"Feb-28-2022",End_Date:"Feb-28-2022",Resource:"-"},
    {sno:"1",topic:"Introduction",Topic_Trainer:"Sandeep Gupta",Trainer_Email:"Sndeep.Gupta@appinventiv.com",Start_Date:"Feb-28-2022",End_Date:"Feb-28-2022",Resource:"-"},
    {sno:"1",topic:"Introduction",Topic_Trainer:"Sandeep Gupta",Trainer_Email:"Sndeep.Gupta@appinventiv.com",Start_Date:"Feb-28-2022",End_Date:"Feb-28-2022",Resource:"-"},
    {sno:"1",topic:"Introduction",Topic_Trainer:"Sandeep Gupta",Trainer_Email:"Sndeep.Gupta@appinventiv.com",Start_Date:"Feb-28-2022",End_Date:"Feb-28-2022",Resource:"-"},
    {sno:"1",topic:"Introduction",Topic_Trainer:"Sandeep Gupta",Trainer_Email:"Sndeep.Gupta@appinventiv.com",Start_Date:"Feb-28-2022",End_Date:"Feb-28-2022",Resource:"-"},
    {sno:"1",topic:"Introduction",Topic_Trainer:"Sandeep Gupta",Trainer_Email:"Sndeep.Gupta@appinventiv.com",Start_Date:"Feb-28-2022",End_Date:"Feb-28-2022",Resource:"-"},
  ]
  details_tarining:any
  constructor(private training_details:JobDetailsService) { }

  ngOnInit(): void {
    this.datasource = new MatTableDataSource<any>(this.Table_DATA)
    this.details_tarining=this.training_details.training_details
  }

}
