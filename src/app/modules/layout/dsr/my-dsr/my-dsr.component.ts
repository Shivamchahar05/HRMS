import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { validation } from 'src/app/constants/form-validatation';
import { JobDetailsService } from 'src/app/services/job-details.service';

@Component({
  selector: 'app-my-dsr',
  templateUrl: './my-dsr.component.html',
  styleUrls: ['./my-dsr.component.scss']
})
export class MyDsrComponent implements OnInit {
  dsrform!: FormGroup
  searchText: any
  addleave = false
  datasource = new MatTableDataSource<any>();
  headings = [
    // { heading: 'Action', key: 'status', type: 'text', sort: true, action: []},
    { heading: 'Sr.No', key: 'S_NO', type: 'text', sort: true },
    { heading: 'Emp Name', key: 'Emp_Name', type: 'text', sort: true },
    { heading: 'EmpId', key: 'EmpId', type: 'text', sort: true },
    { heading: 'Email', key: 'Email', type: 'text', sort: true },
    { heading: 'Employment Type', key: 'Employment_Type', type: 'text', sort: true },
    { heading: 'Date', key: 'Date', type: 'text', sort: true },
    { heading: 'Total(Logged Hr)', key: 'Total', type: 'text', sort: true },
    { heading: 'Final Approval', key: 'final', type: 'action', sort: true, action: [2] },

  ]
  dp5:any;
  time:any
  // this.dp5=this.convert(`${this.dsrform.controls?.['dp5'].value}`);
  Table_DATA: any[] = []
  constructor(private fb: FormBuilder, private dsr_details_send:JobDetailsService) { }

  ngOnInit(): void {
    this.creatdsrform();
  }
  Leave_type = ["Training Project React JS", "Miscellaneous", "Interview",]
  add_leave() {
    this.addleave = !this.addleave
  }
  creatdsrform() {

    this.dsrform = this.fb.group({
      Project: [null, [validation.INPUT_REQUIRED]],
      Description: [null, [validation.INPUT_REQUIRED]],
      dp5: [Date, { disabled: true }, [validation.INPUT_REQUIRED]],
      Hour: [null, [validation.INPUT_REQUIRED]],
    })
  }
  add_new_dsr(){
    console.log(this.dsrform,"dsrform");
    this.dsr_details_send.dsr_details=this.dsrform
    let s_no=this.Table_DATA.length+1
    this.dp5=this.convert(`${this.dsrform.controls?.['dp5'].value}`);
    this.time=this.transformtime(`${this.dsrform.controls?.['Hour'].value}`)
    this.Table_DATA.push(
      { S_NO:`${s_no}`,Emp_Name:'shivam chahar',EmpId:'AI1610',Email:'shivam.chahar@appinventiv.com',Employment_Type:'Permanenet',Date:`${this.dp5}`,Total:`${this.time}`}
      )
      this.datasource = new MatTableDataSource<any>(this.Table_DATA)
      // this.dsrform.reset();
  }
  convert(str:any) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
  transformtime(time: any): any {
    let hour = (time.split(':'))[0]
    let min = (time.split(':'))[1]
    let part = hour > 12 ? 'pm' : 'am';
    if(parseInt(hour) == 0)
     hour = 12;
    min = (min+'').length == 1 ? `0${min}` : min;
    hour = hour > 12 ? hour - 12 : hour;
    hour = (hour+'').length == 1 ? `0${hour}` : hour;
    return `${hour}:${min} ${part}`
  }

}
