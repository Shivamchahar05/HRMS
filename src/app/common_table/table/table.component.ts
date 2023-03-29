import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {TableColumn } from 'src/app/constants/column';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  matHeaderRow: any = [];
  @Input() columns!: any;
  @Input() dataSource!: any;
  @Input() Table_DATA!: any;
  @Input() isFilterable: any;
  @Input() TableClass!: string;
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }
  // @Output() getResponse = new EventEmitter;  
  // @Output() request: EventEmitter<any> = new EventEmitter();
  @Output() sort: EventEmitter<Sort> = new EventEmitter();

  paginationSizes=[10];
  defaultPageSize=5;
  public displayedColumns!: string[];
  constructor(private route:Router,public sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.columns.forEach((item:any) => {
      this.matHeaderRow.push(item.heading)
    });
    this.columns.map((tableColumn: TableColumn) => tableColumn.heading);
  }
  dsr_pending(){
    this.route.navigate(['/layout/emp-dsr-detail'])
  }
  dsr_updated(){
    this.route.navigate(['/layout/edit-dsr'])
  }
  leave_details(){
    this.route.navigate(['/layout/leave-details'])
  }
}
