import { Component, OnInit } from '@angular/core';
import { FlipAnimation } from 'src/animations/animations';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss'],
  animations: FlipAnimation.animations
})
export class ShiftComponent implements OnInit {
  show: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
