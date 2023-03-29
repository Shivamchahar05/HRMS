import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { validation } from 'src/app/constants/form-validatation';
import { JobDetailsService } from 'src/app/services/job-details.service';



@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.scss']
})
export class MyLeaveComponent implements OnInit {
  my_leave_form!: FormGroup
  dp5:any
  dp6:any
  searchText:any
  halfdays=false
  addleave=false
  datasource = new MatTableDataSource<any>();
  headings = [
    { heading: 'Action', key: 'status', type: 'action', sort: true, action: [4]},
    { heading: 'Leave Type', key: 'leave_type', type: 'text', sort:true },
    { heading: 'Request Form', key: 'Request_form', type: 'text',sort: true },
    { heading: 'Request To', key: 'Request_to', type: 'text',sort: true },
    { heading: 'Applied On', key: 'Applied_on', type: 'text',sort: true },
    { heading: 'Status', key: 'Status', type: 'text',sort: true },
    { heading: 'Level 1', key: 'Level_1', type: 'text',sort: true },
    { heading: 'Level 2', key: 'Level_2', type: 'text',sort: true },
  ]

  Table_DATA: any[] = []
  constructor(private fb: FormBuilder, private my_date:JobDetailsService) { }

  ngOnInit(): void {
    this. creatdsrform();
  }
  Leave_type=["Planned Leave(CL)", "Privileged Leave","Emergency Leave(CL)","Short Leave","All Remaining leaves"]
  employeeLeaves = [
    { type: 'Planned Leave(CL)', total: 6.00, claimed: 0 },
    { type: 'Privileged Leave', total: 6.00, claimed: 0 },
    { type: 'Emergency Leave(CL)', total: 6.00, claimed: 0 },
    { type: 'Short Leave', total: 10.00, claimed: 0 },
  ];
  halfday(){
    this.halfdays=!this.halfdays
  }
  add_leave(){
    this.addleave=!this.addleave
  }
  creatdsrform() {
    this.my_leave_form = this.fb.group({
      leave: [null, [validation.INPUT_REQUIRED]],
      Description: [null, [validation.INPUT_REQUIRED]],
      dp5: [Date, { disabled: true }, [validation.INPUT_REQUIRED]],
      dp6: [Date, { disabled: true }, [validation.INPUT_REQUIRED]],
      Remarks: [null],
      upload_file:[null],
    })
  }

  add_my_leave(){
    this.dp5=this.my_date.convert(`${this.my_leave_form.controls?.['dp5'].value}`);
    this.dp6=this.my_date.convert(`${this.my_leave_form.controls?.['dp6'].value}`);
    this.Table_DATA.push(
      { leave_type:`${this.my_leave_form.controls?.['leave'].value}`,Request_form:`${ this.dp5}`,Request_to:`${ this.dp6}`,Applied_on:'29/03/2023',Status:'Pending',Level_1:'Suyash Saxena(AI057)',Level_2:'HR (Human Resourse)'}
      )
      this.datasource = new MatTableDataSource<any>(this.Table_DATA);
  }

}
