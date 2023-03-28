import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GALLERY_IMAGES } from 'src/app/constants/gallery';

@Component({
  selector: 'app-galary-dialog',
  templateUrl: './galary-dialog.component.html',
  styleUrls: ['./galary-dialog.component.scss']
})
export class GalaryDialogComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public id: number,config: NgbCarouselConfig) { 
    config.interval = 2000;
    config.keyboard = true;
    // config.pauseOnHover = true;
  }
  allGalleryImages = GALLERY_IMAGES;
  selectedGallery:any=[];
  ngOnInit(): void {
    console.log(this.allGalleryImages,this.id,"DAATA"); 
    let selectedGalleryIndex = this.allGalleryImages.findIndex((item:any)=> item.gallery_code == this.id)
    this.selectedGallery = this.allGalleryImages[selectedGalleryIndex];
    console.log(this.selectedGallery,"SGI");
  }
}
