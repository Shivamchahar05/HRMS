import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/modules/layout/project-details/project-details.component';

@Component({
  selector: 'app-project-tags',
  templateUrl: './project-tags.component.html',
  styleUrls: ['./project-tags.component.scss']
})
export class ProjectTagsComponent implements OnInit {
  add_tag=''
  // add_tags:any
  constructor( public dialogRef: MatDialogRef<ProjectTagsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  ngOnInit(): void {
  }
    onNoClick(): void {
    this.dialogRef.close();
  }
  new_add_tag(){
    // this.add_tags=this.add_tag
    this.dialogRef.close(this.add_tag);
  }

}
