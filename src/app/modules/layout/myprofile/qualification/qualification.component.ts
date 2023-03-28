import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { FlipAnimation } from 'src/animations/animations';
import { validation } from 'src/app/constants/form-validatation';
import { Marital_Status } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
  animations: FlipAnimation.animations
})
export class QualificationComponent implements OnInit {
  qualification_form!:FormGroup
  show: boolean = true;
  searchText:any
  pageSize!:any;
  data:any
  datasource = new MatTableDataSource<any>();
  headings = [
    { heading: 'Action', key: 'status', type: 'text', sort: true, action: []},
    { heading: 'School/University', key: 'SUName', type: 'text', sort:true },
    { heading: 'Time Period', key: 'Time_Period', type: 'text',sort: true },
    { heading: 'Education level', key: 'ElName', type: 'text',sort: true },
  ]

  Table_DATA: any[] = [
    // {status:"hii",SUName:"ghgh",Time_Period:"djwmdwd",ElName:"edkjewdhkj"}
  ]

  dp4:any;
  dp3:any

  constructor(private _snackBar:MatSnackBar, private fb:FormBuilder) { }


  ngOnInit(): void {
    // this.datasource = new MatTableDataSource<any>(this.Table_DATA)
    this.createform();
    }
 

  qualifications: Marital_Status[] = [
    {value: 'High School Diploma/GED', viewValue: 'High School Diploma/GED'},
    {value: 'B.Tech', viewValue: 'B.Tech'},
    {value: 'M.Tech', viewValue: 'M.Tech'},
    {value: 'BCA', viewValue: 'BCA'},
    {value: 'MCA', viewValue: 'MCA'},
    {value: 'BBA', viewValue: 'BBA'},
    {value: 'MBA', viewValue: 'MBA'},
    {value: 'B.Sc', viewValue: 'B.Sc'},
    {value: 'M.Sc', viewValue: 'M.Sc'},
    {value: 'BA', viewValue: 'BA'},
    {value: 'MA', viewValue: 'MA'},
    {value: 'Phd', viewValue: 'Phd'},
    {value: 'Diploma', viewValue: 'Diploma'},
    {value: 'B.Sc Animation & Flim Making', viewValue: 'B.Sc Animation & Flim Making'},
    
  ];
  getcontrol(){
    this.qualification_form.controls
  }

  save(){
    if(this.qualification_form.valid){
    this._snackBar.open("succeesfully submit  ",'',{
      duration:2000,
      verticalPosition:"top",
      horizontalPosition:"center",
      panelClass: ['green-snackbar']   
     })
     this.dp4=this.convert(`${this.qualification_form.controls?.['dp4'].value}`)
     this.dp3=this.convert(`${this.qualification_form.controls?.['dp3'].value}`)
     this.Table_DATA.push(
     { SUName:`${this.qualification_form.controls?.['School'].value}`,Time_Period:`${this.dp4} - ${this.dp3}`,ElName:`${this.qualification_form.controls?.['education'].value}`}
     )
    this.datasource = new MatTableDataSource<any>(this.Table_DATA)
     
    }
    else{
      this._snackBar.open("please fill the entries  ",'',{
        duration:2000,
        verticalPosition:"top",
        horizontalPosition:"center",
        panelClass: ['red-snackbar']
       })
    }

   }

   createform(){
    this.qualification_form=this.fb.group({
      School:[null,[validation.INPUT_REQUIRED]],
      education:[null,[validation.INPUT_REQUIRED]],
      Language:[null,[validation.INPUT_REQUIRED]],
      dp4:[Date,{disabled: true},[validation.INPUT_REQUIRED]],
      dp3:[Date,{disabled: true},[validation.INPUT_REQUIRED]],
      Professional:[null,[validation.INPUT_REQUIRED]],
      address:[null,[validation.INPUT_REQUIRED]]
    })
   }
   convert(str:any) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
 
}
