import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { loginFlipAnimation } from 'src/animations/animations';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: loginFlipAnimation.animations
})
export class LoginComponent implements OnInit {
  crediential=false;
  hide1=true;
  googl=true;
  show: boolean = true;
  errorMessage:any
  constructor(
    private route:Router,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
  }
  credentials(){
    this.googl=false
    this.crediential=true;
     
  }
  google(){
    this.googl=true
    this.crediential=false;
  }
 
 

}
