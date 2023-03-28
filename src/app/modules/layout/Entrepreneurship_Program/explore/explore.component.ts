import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  add_pitch(){
  this.route.navigate(['/layout/add_pitch'])
  }

}
