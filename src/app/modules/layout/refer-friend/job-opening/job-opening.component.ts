import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JOB_OPENINGS } from 'src/app/constants/job_opening ';
import { ReferCandidateComponent } from 'src/app/dialogs/refer-candidate/refer-candidate.component';
import { JobDetailsService } from 'src/app/services/job-details.service';

@Component({
  selector: 'app-job-opening',
  templateUrl: './job-opening.component.html',
  styleUrls: ['./job-opening.component.scss']
})
export class JobOpeningComponent implements OnInit {
  openings:any=[]
  name!: string;
  constructor(private route :Router ,private jobdetails:JobDetailsService , public dialog: MatDialog) { }

  ngOnInit(): void {
    openings: this.openings=JOB_OPENINGS
  }
  
  view_details(data:any){
    this.jobdetails.job_detals=data
    this.route.navigate(['/layout/job-details'])
  }
  openDialog(opening:any): void {
    const dialogRef = this.dialog.open(ReferCandidateComponent, {
      data:opening,
      maxHeight:'90vh'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });
  }

}
