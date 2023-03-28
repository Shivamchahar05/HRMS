import { Component, OnInit } from '@angular/core';
import { FlipAnimation } from 'src/animations/animations';

@Component({
  selector: 'app-appraisal',
  templateUrl: './appraisal.component.html',
  styleUrls: ['./appraisal.component.scss'],
  animations: FlipAnimation.animations
})
export class AppraisalComponent implements OnInit {
  show: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
