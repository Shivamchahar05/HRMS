import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { validation } from 'src/app/constants/form-validatation';
import { FORGET_PASSWORD } from 'src/app/constants/router';
import { validationMessage } from 'src/app/constants/validators-message';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss']
})
export class CredentialsComponent implements OnInit {
  login!:FormGroup
  errorMessage:any
  hide1=true;
  
  constructor(
    private route:Router,
    private fb:FormBuilder,
    private _snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.errorMessage = validationMessage
  }

  loginnext(){
    if(this.login.valid){
      this._snackBar.open("succeesfully login  ",'',{
        duration:2000,
        verticalPosition:"top",
        horizontalPosition:"center",
       })
      this.route.navigate(['layout'])
    }
}
forgetpassword(){
  this.route.navigate([FORGET_PASSWORD.fullUrl])
}
createForm(){
  this.login=this.fb.group({
    email:[null,[validation.INPUT_REQUIRED,validation.EMAIL.EMAIL_email,validation.EMAIL.EMAIL_PATTERN]],
    password:[null,[validation.INPUT_REQUIRED,validation.PASSWORD.PASSWORD_LENGTH]]
  })
}


}
