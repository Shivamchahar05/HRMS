import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FlipAnimation } from 'src/animations/animations';
import { validation } from 'src/app/constants/form-validatation';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss'],
  animations: FlipAnimation.animations
})
export class ProfilePictureComponent implements OnInit {
  profile_picture!:FormGroup
  show: boolean = true;
  imageSrc:any=""
  previewImg=""
  constructor(private _snackBar:MatSnackBar,private fb:FormBuilder,) { }

  ngOnInit(): void {
    this.createForm();
  }
  save(){
    console.log("hiii");
    
    this._snackBar.open("succeesfully submit  ",'',{
      duration:2000,
      verticalPosition:"top",
      horizontalPosition:"center",
      panelClass: ['green-snackbar']
     })
}
   readURL(event: any) {
    var file = event.dataTransfer
    ? event.dataTransfer.files[0]
    : event.target.files[0];
  var reader = new FileReader();
  reader.onload = this._handleReaderLoaded.bind(this); 
  reader.readAsDataURL(file);
}
_handleReaderLoaded(e: any) {
  let reader = e.target;
  this.imageSrc = reader.result.substr(reader.result.indexOf(',') + 1);
      this.previewImg = e.target.result;
      // console.log(this.profile_picture.get('profile')?.setValue(this.previewImg),"profile");
      this.profile_picture.controls?.['profile'].setValue(this.previewImg);
      // console.log(this.profile_picture,"form");
      
  }

  createForm(){
    this.profile_picture=this.fb.group({
      profile:[,[validation.INPUT_REQUIRED]],
    })
    console.log("form...",this.profile_picture);
    
  }

  removedoc(img:any){
      this.profile_picture.controls?.['profile']?.reset();
         this.previewImg=''
         this.imageSrc=''
         console.log(this.profile_picture,"form");
  }
  


}
