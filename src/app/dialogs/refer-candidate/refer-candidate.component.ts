import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-refer-candidate',
  templateUrl: './refer-candidate.component.html',
  styleUrls: ['./refer-candidate.component.scss']
})
export class ReferCandidateComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ReferCandidateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder:FormBuilder,
  ) { }
    referCandidateForm!:FormGroup
  ngOnInit(): void {
    this.createReferCandidateForm(); 
    this.setOldValues()

  }
  setOldValues(){
    console.log(this.data.department);
    
    this.referCandidateForm.get('department')?.setValue(this.data.department);
    this.referCandidateForm.get('department')?.disable();

    this.referCandidateForm.get('job_location')?.setValue(this.data.location);
    this.referCandidateForm.get('job_location')?.disable();

    this.referCandidateForm.get('experience_required')?.setValue(this.data.job_experience_requried);
    this.referCandidateForm.get('experience_required')?.disable()

    this.referCandidateForm.get('job_title')?.setValue(this.data.job_title);
    this.referCandidateForm.get('job_title')?.disable()
    this.referCandidateForm.get('job_code')?.disable()
  }

  createReferCandidateForm(){
    this.referCandidateForm = this._formBuilder.group({
      department:['',],
      job_code:['AI101'],
      job_location:[''],
      location:['', [Validators.required]],
      experience_required:['',[Validators.required]],
      experience:['',[Validators.required]],
      job_title:['',[Validators.required]],
      candidate_name: ['',[Validators.required]],
      skillset:['',[Validators.required]],
      email:['',],
      phone_number:['',[Validators.required]],
    })
  }

  noSpace(event:any){
    if(event.target.selectionStart == 0 && event.code == "Space"){
      event.preventDefault();
    }
  }
  
  submitReferCandidate(){
   
    if(this.referCandidateForm.valid){
    }else{
      this.referCandidateForm.markAllAsTouched();
    }
  }

}
