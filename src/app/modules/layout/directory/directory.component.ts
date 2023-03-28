import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EMPLOYEE_DATA } from 'src/app/constants/employe_data';
import { Marital_Status } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  directort_search!: FormGroup;
  searchText:any
  items=<any>[]
  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
    this.items=EMPLOYEE_DATA
    this. createForm() 
  }
  createForm() {
    this.directort_search = this.fb.group({
      Search: ['', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
      DEPARTMENT:['']
    });
  }
  DEPARTMENTS = [
    'All',
    '.NET',
    'Admin',
    'Android',
    'Angular',
    'Blockchain',
    'Business Analyst',
    'Designing',
    'DevOps',
    'FINANCE',
    'Flutter',
    'Government Team Marketing',
    'House Keeping',
    'HR',
  ];
  reset(){
    // this.items=[]
    this.items=EMPLOYEE_DATA
    this.directort_search.reset();
  }
  applyFilter(event: any) {
    console.log(event,"hiii");
    if (event) {
      console.log("kkkkkkkk");
      
      console.log(event, "nnnnnnnnnnn");
      console.log(this.items , 'items');
      this.items = this.items.filter((item:any) => 
       item.name == event
        // console.log(item.name.toLowerCase(event),"return");
        // return item.name.toLowerCase(event);
        // item.name.toLowerCase() == event.toLowerCase()
      )
      
      console.log(this.items,"itemsfilter");
      

    //   let arr = this.items.filter((data:any) => {
    //     console.log("data name?>>>>",data.name.toLowerCase().startsWith(filterValue));
        
    //     return data.name.toLowerCase().startsWith(filterValue);
    // });
      
    //  console.log("filter value>>>>>>>>",arr);
     
      //  = filterValue.trim().toLocaleLowerCase();

      // console.log(this.items.filter, "filter");
      

    }
    else{
      this.items=EMPLOYEE_DATA
    }
  }
  append(){
    console.log('byeeee', this.directort_search.controls?.["Search"].value);
    this.applyFilter(this.directort_search?.controls?.["Search"].value)
    this.selectfilter(this.directort_search.controls?.["DEPARTMENT"].value)
  }
  
  selectfilter(event:any){
    if (event) {
      this.items = this.items.filter((item:any) =>
      item.department == event 
      )
    }
    this.applyFilter(this.directort_search?.controls?.["Search"].value)
    
  }

  // items=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1]

}
