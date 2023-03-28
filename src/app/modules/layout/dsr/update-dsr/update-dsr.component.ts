import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-dsr',
  templateUrl: './update-dsr.component.html',
  styleUrls: ['./update-dsr.component.scss']
})
export class UpdateDsrComponent implements OnInit {
  Leave_type = ["Training Project React JS", "Miscellaneous", "Interview",]
  constructor() { }

  ngOnInit(): void {
  }

}
