import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { validation } from 'src/app/constants/form-validatation';
import { JobDetailsService } from 'src/app/services/job-details.service';

@Component({
  selector: 'app-update-dsr',
  templateUrl: './update-dsr.component.html',
  styleUrls: ['./update-dsr.component.scss']
})
export class UpdateDsrComponent implements OnInit {
  dsrform_updated!: FormGroup
  ser_form:any
  Leave_type = ["Training Project React JS", "Miscellaneous", "Interview",]
  constructor(private fb:FormBuilder, private set_dsr_:JobDetailsService, private route:Router) { }

  ngOnInit(): void {
    this.creatdsrform();
    this.ser_form=this.set_dsr_.dsr_details;
    // console.log(this.ser_form,'set_value');
    this.set_dsr_form();
  }
  creatdsrform() {
    this.dsrform_updated = this.fb.group({
      Project: [null, [validation.INPUT_REQUIRED]],
      Description: [null, [validation.INPUT_REQUIRED]],
      dp5: [Date, { disabled: true }, [validation.INPUT_REQUIRED]],
      Hour: [null, [validation.INPUT_REQUIRED]],
    })
  }
  set_dsr_form(){
    console.log(this.ser_form,'set_value');
    
    this.dsrform_updated.get('Project')?.setValue(this.ser_form.controls?.['Project'].value);
    this.dsrform_updated.get('Project')?.disable();
    this.dsrform_updated.get('Description')?.setValue(this.ser_form.controls?.['Description'].value);
    this.dsrform_updated.get('dp5')?.setValue(this.ser_form.controls?.['dp5'].value);
    this.dsrform_updated.get('dp5')?.disable();
    this.dsrform_updated.get('Hour')?.setValue(this.ser_form.controls?.['Hour'].value);
  }
  updated_dsr(){
    this.set_dsr_.dsr_details= this.dsrform_updated ;
    this.route.navigate(['/layout/emp-dsr-detail'])
  }

}
