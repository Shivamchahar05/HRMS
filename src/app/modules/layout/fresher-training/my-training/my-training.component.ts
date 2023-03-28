import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TRAINING } from 'src/app/constants/training';
import { TrainingFeedbackComponent } from 'src/app/dialogs/training-feedback/training-feedback.component';
import { JobDetailsService } from 'src/app/services/job-details.service';

@Component({
  selector: 'app-my-training',
  templateUrl: './my-training.component.html',
  styleUrls: ['./my-training.component.scss']
})
export class MyTrainingComponent implements OnInit {
  Training:any=[]
  constructor(public dialog: MatDialog, private route:Router,private jobdetails:JobDetailsService) { }

  ngOnInit(): void {
    Training: this.Training=TRAINING
  }
  feedback(opening:any): void {
    const dialogRef = this.dialog.open(TrainingFeedbackComponent, {
      data:opening,
      maxHeight:'90vh'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.name = result;
    });
  }

}
