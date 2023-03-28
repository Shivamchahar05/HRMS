import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { loginFlipAnimation } from 'src/animations/animations';
import { validation } from 'src/app/constants/form-validatation';
import { ACCOUNT, LOGIN } from 'src/app/constants/router';
import { validationMessage } from 'src/app/constants/validators-message';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
  animations: loginFlipAnimation.animations
})
export class ForgetPasswordComponent implements OnInit {
  forgetpass!:FormGroup
  show: boolean = true;
  errorMessage:any
  constructor(
    private route:Router,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm()
    this.errorMessage = validationMessage
  }
  credentials(){
    this.route.navigate([ACCOUNT.baseUrl])
     
  }
  createForm(){
    this.forgetpass=this.fb.group({
      email:[null,[validation.INPUT_REQUIRED,validation.EMAIL.EMAIL_email,validation.EMAIL.EMAIL_PATTERN]],
    })
  }

}
