import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UPCOMING_TRAINING } from 'src/app/constants/upcoming_training';

@Component({
  selector: 'app-upcoming-training',
  templateUrl: './upcoming-training.component.html',
  styleUrls: ['./upcoming-training.component.scss']
})
export class UpcomingTrainingComponent implements OnInit {
  upcoming_training:any
  enroll_training=true
  constructor(private _snackBar:MatSnackBar) { }
  count_seats:any
  ngOnInit(): void {
    this.upcoming_training=UPCOMING_TRAINING
    for (let index = 0; index < this.upcoming_training.length; index++) {
      this.count_seats = this.upcoming_training[index].seats;
    }
  }
  enroll(){
    this.enroll_training=false;
    this.count_seats--;
    this._snackBar.open("succeesfully enroll  ",'',{
      duration:2000,
      verticalPosition:"top",
      horizontalPosition:"center",
      panelClass: ['green-snackbar']
     })

  }
  cancel_enroll(){
    this.enroll_training=true;
    this.count_seats++;
  }

}
