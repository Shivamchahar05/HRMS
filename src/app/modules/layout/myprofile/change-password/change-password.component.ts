import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FlipAnimation } from 'src/animations/animations';
import { validation } from 'src/app/constants/form-validatation';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  animations: FlipAnimation.animations
})
export class ChangePasswordComponent implements OnInit {
  change_password!:FormGroup
  show: boolean = true;
  constructor(private _snackBar:MatSnackBar, private fb:FormBuilder,) { }

  ngOnInit(): void {
    this.createForm()
  }
  save(){
    if(this.change_password.valid ){
    if((this.change_password.controls?.['new_password'].value)== (this.change_password.controls?.['confirm_password'].value)){
    this._snackBar.open("succeesfully submit  ",'',{
      duration:2000,
      verticalPosition:"top",
      horizontalPosition:"center",
      panelClass: ['green-snackbar']
     })}
     else{
      this._snackBar.open("please enter confirm password  ",'',{
        duration:2000,
        verticalPosition:"top",
        horizontalPosition:"center",
        panelClass: ['red-snackbar']
       })
     }
    }else{
      this._snackBar.open("please enter entries  ",'',{
        duration:2000,
        verticalPosition:"top",
        horizontalPosition:"center",
        panelClass: ['red-snackbar']
       })
    }
   }
   createForm(){
    this.change_password=this.fb.group({
      old_password:[null,[validation.INPUT_REQUIRED]],
      new_password:[null,[validation.INPUT_REQUIRED]],
      confirm_password:[null,[validation.INPUT_REQUIRED]]
    })
  }



}
