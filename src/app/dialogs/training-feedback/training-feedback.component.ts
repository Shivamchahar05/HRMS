import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-training-feedback',
  templateUrl: './training-feedback.component.html',
  styleUrls: ['./training-feedback.component.scss']
})
export class TrainingFeedbackComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TrainingFeedbackComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder:FormBuilder,
  ) { }

  ngOnInit(): void {
  }

}
