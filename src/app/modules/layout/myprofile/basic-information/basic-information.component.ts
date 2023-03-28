import { Component, createPlatformFactory, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FlipAnimation } from 'src/animations/animations';
import { validation } from 'src/app/constants/form-validatation';
import { Gender, Marital_Status } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss'],
  animations: FlipAnimation.animations
})
export class BasicInformationComponent implements OnInit {
  minDate!: Date;
  maxDate!: Date;
  basic_inform_form!:FormGroup
  searchText:any
  show: boolean = true;
  constructor(private _snackBar:MatSnackBar,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createform();
    // const currentYear = new Date().getFullYear();
    // this.minDate = new Date(currentYear - 1, 0, 1);
    // this.maxDate = new Date(currentYear + 1, 11, 31);
  }
  genders: Gender[] = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'},
    
  ];
  Marital_Status: Marital_Status[] = [
    {value: 'Single', viewValue: 'Single'},
    {value: 'Married', viewValue: 'Married'},
    {value: 'Widowed', viewValue: 'Widowed'},
    {value: 'Divorced or Seperated', viewValue: 'Divorced or Seperated'},
    
  ];
 save(){
  if(this.basic_inform_form.valid){
  this._snackBar.open("succeesfully submit  ",'',{
    duration:2000,
    verticalPosition:"top",
    horizontalPosition:"center",
    panelClass: ['green-snackbar']
   })
   console.log(this.basic_inform_form.value,"kkkk");
  }else{
    this._snackBar.open("please fill the entries  ",'',{
      duration:2000,
      verticalPosition:"top",
      horizontalPosition:"center",
      panelClass: ['red-snackbar']
     })
  }
   
 }
 createform(){
  this.basic_inform_form=this.fb.group({
    first_name:[null,[validation.INPUT_REQUIRED]],
    last_name:[null,[validation.INPUT_REQUIRED]],
    dp5:[Date,{disabled: true},[validation.INPUT_REQUIRED]],
    gender:[null,[validation.INPUT_REQUIRED]],
    marital_status:[null,[validation.INPUT_REQUIRED]],
    contact_number:[null,[validation.INPUT_REQUIRED]],
    working_experience_year:[null,[validation.INPUT_REQUIRED]],
    working_experience_month:[null,[validation.INPUT_REQUIRED]],
    relevant_experience_year:[null,[validation.INPUT_REQUIRED]],
    relevant_experience_month:[null,[validation.INPUT_REQUIRED]],
    address:[null,[validation.INPUT_REQUIRED]]
  })
 }

}
