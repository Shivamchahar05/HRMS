import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectTagsComponent } from 'src/app/dialogs/project-tags/project-tags.component';
export interface DialogData {
}
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  tag = <any>[];


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ProjectTagsComponent, {
      // data: {tag: this.tag},
      width:"30%"
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed');
      console.log(result);
      
      this.tag.push(result);

    });
  }
}


