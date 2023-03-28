import { Component, OnInit } from '@angular/core';
import { JobDetailsService } from 'src/app/services/job-details.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  job_details:any
  constructor(private jobdetails:JobDetailsService) { }

  ngOnInit(): void {
    this.job_details=this.jobdetails.job_detals
    console.log(this.job_details,'this.job_details');
  }

}
