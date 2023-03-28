import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   project_notes=[
        {notes:"Project Plan", time:"13, Dec 2020 09:10 AM", tag:"download"},
        {notes:"SRS", time:"21, May 2021 01:09 PM",tag:"download"}
   ]
}
