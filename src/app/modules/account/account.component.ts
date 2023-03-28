import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
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
  //     transition(':enter', [
  //       style({ transform: 'translateY(-100%)', opacity: 0 }),
  //       animate('600ms ease-in', style({ transform: 'translateY(0%)', 'opacity': 1 }))
  //     ]),
      
  //     // transition(':leave', [
  //     //   style({ transform: 'translateX(0%)', opacity: 1 }),
  //     //   animate('0ms ease-in', style({ transform: 'translateX(100%)', 'opacity': 0 }))
  //     // ])
  //   ])
  // ]
})
export class AccountComponent implements OnInit {
  
  constructor() { }
  ngOnInit(): void {
  }

}
