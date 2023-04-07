import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-sub-topics',
  templateUrl: './sub-topics.component.html',
  styleUrls: ['./sub-topics.component.scss']
})
export class SubTopicsComponent implements OnInit {
  datasource = new MatTableDataSource<any>();
  headings = [
    { heading: 'S.No', key: 'sno', type: 'text', sort: true},
    { heading: 'Sub Topic', key: 'Sub_Topic', type: 'text', sort:true },
    { heading: 'Topic', key: 'topic', type: 'text', sort:true },
    { heading: 'Topic Trainer', key: 'Topic_Trainer', type: 'text',sort: true },
    { heading: 'Trainer Email', key: 'Trainer_Email', type: 'text',sort: true },
    { heading: 'Start Date', key: 'Start_Date', type: 'text',sort: true },
    { heading: 'End Date', key: 'End_Date', type: 'text',sort: true },
    { heading: 'Resource URL', key: 'Resource', type: 'text',sort: true },
  ]

  Table_DATA: any[] = [
    {sno:"1",Sub_Topic:"What is SPADifference between SPA and MPAWhat is AngularWhy should we use it?",topic:"Introduction",Topic_Trainer:"Sandeep Gupta",Trainer_Email:"Sndeep.Gupta@appinventiv.com",Start_Date:"Feb-28-2022",End_Date:"Feb-28-2022",Resource:"-"},
    {sno:"1",Sub_Topic:"What is SPADifference between SPA and MPAWhat is AngularWhy should we use it?",topic:"Introduction",Topic_Trainer:"Sandeep Gupta",Trainer_Email:"Sndeep.Gupta@appinventiv.com",Start_Date:"Feb-28-2022",End_Date:"Feb-28-2022",Resource:"-"},
    {sno:"1",Sub_Topic:"What is SPADifference between SPA and MPAWhat is AngularWhy should we use it?",topic:"Introduction",Topic_Trainer:"Sandeep Gupta",Trainer_Email:"Sndeep.Gupta@appinventiv.com",Start_Date:"Feb-28-2022",End_Date:"Feb-28-2022",Resource:"-"},
    {sno:"1",Sub_Topic:"What is SPADifference between SPA and MPAWhat is AngularWhy should we use it?",topic:"Introduction",Topic_Trainer:"Sandeep Gupta",Trainer_Email:"Sndeep.Gupta@appinventiv.com",Start_Date:"Feb-28-2022",End_Date:"Feb-28-2022",Resource:"-"},
    {sno:"1",Sub_Topic:"What is SPADifference between SPA and MPAWhat is AngularWhy should we use it?",topic:"Introduction",Topic_Trainer:"Sandeep Gupta",Trainer_Email:"Sndeep.Gupta@appinventiv.com",Start_Date:"Feb-28-2022",End_Date:"Feb-28-2022",Resource:"-"},
    {sno:"1",Sub_Topic:"What is SPADifference between SPA and MPAWhat is AngularWhy should we use it?",topic:"Introduction",Topic_Trainer:"Sandeep Gupta",Trainer_Email:"Sndeep.Gupta@appinventiv.com",Start_Date:"Feb-28-2022",End_Date:"Feb-28-2022",Resource:"-"},
  ]
  constructor() { }

  ngOnInit(): void {
    this.datasource = new MatTableDataSource<any>(this.Table_DATA)
  }

}
