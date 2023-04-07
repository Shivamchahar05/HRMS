import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { JobDetailsService } from 'src/app/services/job-details.service';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss']
})
export class TrainingDetailsComponent implements OnInit {
details_tarining:any
  constructor(private training_details:JobDetailsService) { }

  ngOnInit(): void {
    this.details_tarining=this.training_details.training_details
  }

}
