import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Gender, Marital_Status } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss'],
  // animations: [
  //   trigger(
  //     'slideView',
  //     [
  //       state('false', style({ transform: 'translateX(100%)', opacity: 0 })),
  //       state('true', style({ transform: 'translateX(0)', opacity: 1 })),
  //       transition('0 => 1', animate('500ms', style({ transform: 'translateX(0)', 'opacity': 1 }))),
  //       transition('1 => 1', animate('500ms', style({ transform: 'translateX(100%)', 'opacity': 0 }))),
  //     ]),

  //   trigger('slideInOut', [
  //     transition('*<=>*', [
  //       style({ transform: 'translateX(100%)', opacity: 0 }),
  //       animate('600ms ease-in', style({ transform: 'translateX(0%)', 'opacity': 1 }))
  //     ]),
      
  //     // transition(':leave', [
  //     //   style({ transform: 'translateX(0%)', opacity: 1 }),
  //     //   animate('0ms ease-in', style({ transform: 'translateX(100%)', 'opacity': 0 }))
  //     // ])
  //   ])
  // ]
})
export class MyprofileComponent implements OnInit {
  searchText:any
  // show: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  

}
