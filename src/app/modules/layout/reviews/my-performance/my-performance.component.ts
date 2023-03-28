import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-performance',
  templateUrl: './my-performance.component.html',
  styleUrls: ['./my-performance.component.scss']
})
export class MyPerformanceComponent implements OnInit {
  searchText:any;
  constructor() { }

  ngOnInit(): void {
  }
  months=[
    'January','February','March','April','May','June','July','August','September','October','November','December'
  ]

}
