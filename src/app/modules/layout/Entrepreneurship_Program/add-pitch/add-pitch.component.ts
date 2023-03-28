import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { validation } from 'src/app/constants/form-validatation';
import { Gender } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-add-pitch',
  templateUrl: './add-pitch.component.html',
  styleUrls: ['./add-pitch.component.scss']
})
export class AddPitchComponent implements OnInit {
  my_details!:FormGroup
 pitch_detail!:FormGroup
  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createform();
    this.setoldvalue()
    
  }
  foods: Gender[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  config = {
    uiColor: '#ffffff',
    toolbarGroups: [{ name: 'clipboard', groups: ['clipboard', 'undo'] },
    { name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
    { name: 'links' }, { name: 'insert' },
    { name: 'document', groups: ['mode', 'document', 'doctools'] },
    { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
    { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align'] },
    { name: 'styles' },
    { name: 'colors' }],
    skin: 'kama',
    resize_enabled: false,
    removePlugins: 'elementspath,save,magicline',
    extraPlugins: 'divarea,smiley,justify,indentblock,colordialog',
    colorButton_foreStyle: {
       element: 'font',
       attributes: { 'color': '#(color)' }
    },
    height: 188,
    removeDialogTabs: 'image:advanced;link:advanced',
    removeButtons: 'Subscript,Superscript,Anchor,Source,Table',
    format_tags: 'p;h1;h2;h3;pre;div'
 }

 createform(){
  this.my_details=this.fb.group({
   Name:['Shivam chahar',[validation.INPUT_REQUIRED]],
    Employee_Id:['AI1610',[validation.INPUT_REQUIRED]],
    DOB:['05/03.1999',[validation.INPUT_REQUIRED]],
    title:['',[validation.INPUT_REQUIRED]],
    Industry:['',[validation.INPUT_REQUIRED]],
    Type:['',[validation.INPUT_REQUIRED]],
    presentation:['',[validation.INPUT_REQUIRED]],
  })
 }

 setoldvalue(){
  this.my_details.get('Name')?.disable();
  this.my_details.get('Employee_Id')?.disable();
  this.my_details.get('DOB')?.disable();
 }

}
