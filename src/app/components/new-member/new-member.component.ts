import { Component, OnInit } from '@angular/core';
import { NEW_MEMBER } from 'src/app/constants/new_member';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { JOB_OPENINGS } from 'src/app/constants/job_opening ';
@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.scss'],
  providers: [NgbCarouselConfig],
})
export class NewMemberComponent implements OnInit {
  new_member:any
  openings:any
  constructor() { }

  ngOnInit(): void {
    this.new_member=NEW_MEMBER
    openings: this.openings=JOB_OPENINGS
  }

}
