import { Component, OnInit } from '@angular/core';
import { JOB_OPENINGS } from 'src/app/constants/job_opening ';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { loginFlipAnimation } from 'src/animations/animations';
import { MatDialog } from '@angular/material/dialog';
import { ReferCandidateComponent } from 'src/app/dialogs/refer-candidate/refer-candidate.component';
import { Router } from '@angular/router';
import { JobDetailsService } from 'src/app/services/job-details.service';


@Component({
  selector: 'app-job-opening',
  templateUrl: './job-opening.component.html',
  styleUrls: ['./job-opening.component.scss'],
  providers: [NgbCarouselConfig],
  animations: loginFlipAnimation.animations
})
export class JobOpeningComponent implements OnInit {
  openings:any=[]
  show: boolean = true;
  name!: string;
  constructor(config: NgbCarouselConfig,public dialog: MatDialog, private route:Router,private jobdetails:JobDetailsService) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
   }

  ngOnInit(): void {
    openings: this.openings=JOB_OPENINGS
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
  job_details(data:any){
    this.jobdetails.job_detals=data
    // console.log(this.jobdetails,"this.jobdetails");
    this.route.navigate(['/layout/job-details'])
  }
}
  


