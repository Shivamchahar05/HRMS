import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GALLERY_IMAGES } from 'src/app/constants/gallery';
import { JobDetailsService } from 'src/app/services/job-details.service';

@Component({
  selector: 'app-galary-dialog',
  templateUrl: './galary-dialog.component.html',
  styleUrls: ['./galary-dialog.component.scss']
})
export class GalaryDialogComponent implements OnInit {
  // @Output() count = new EventEmitter<string>();
  constructor( @Inject(MAT_DIALOG_DATA) public id: number,config: NgbCarouselConfig,  private count:JobDetailsService) { 
    config.interval = 2000;
    config.keyboard = true;
    // config.pauseOnHover = true;
  }
  allGalleryImages = GALLERY_IMAGES;
  selectedGallery:any=[];
  count_images:any
  ngOnInit(): void {

    console.log(this.allGalleryImages,this.id,"DAATA"); 
    let selectedGalleryIndex = this.allGalleryImages.findIndex((item:any)=> item.gallery_code == this.id)
    this.selectedGallery = this.allGalleryImages[selectedGalleryIndex];
    this.count_images = this.selectedGallery.gallery_images.length;
    this.count.count_images= this.count_images
    console.log(this.selectedGallery,"SGI");
    // this.count.emit( this.count_images)
  }
  
}
