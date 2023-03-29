import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { loginFlipAnimation } from 'src/animations/animations';
import { GALLERY_DATA } from 'src/app/constants/gallery';
import { GalaryDialogComponent } from 'src/app/dialogs/galary-dialog/galary-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: loginFlipAnimation.animations
})
export class HomeComponent implements OnInit {
  count_image:any
  Images:any=[];
 
  constructor(private rendre:Renderer2, private ref:ElementRef, private route:Router,private _dialog:MatDialog ) { }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      },
    },
    nav: true
  }

  ngOnInit(): void {
    this.Images=GALLERY_DATA
    this.count_image=this.Images.length
    console.log(this.Images,'images');
    

  //   setTimeout(() => {


  //     let element1 = this.ref.nativeElement.querySelector('.owl-stage-outer');

  //     console.log("selected ele.." , element1);

  //     this.rendre.setStyle(element1,'height', '256px');
      
  //     let element2 = this.ref.nativeElement.querySelector('.owl-stage ');

  //     console.log("selected ele.." , element2);

  //     this.rendre.setStyle(element2,'height', '256px');
 
  //     this.rendre.setStyle(element2,'width', '100%'); 


  //     let element3 = this.ref.nativeElement.querySelectorAll('.owl-item');

  //     console.log("selected ele.." , element3);   

  //     element3.forEach((item:any) => {   

  //       this.rendre.setStyle(item,'height', '256px');
         
  //       this.rendre.setStyle(item,'width', '33%');

  //       // this.rendre.setStyle(item,'margin', '0px 25px');

  //     });

  //     let element4 = this.ref.nativeElement.querySelector('.owl-nav');

  //     this.rendre.setStyle(element4,'width', '100px');


  //     this.rendre.setStyle(element4,'position', 'absolute');

  //     this.rendre.setStyle(element4,'top', '-60px');

  //     this.rendre.setStyle(element4,'right', '-15px');

  //     let element5 = this.ref.nativeElement.querySelector('.owl-carousel');

  //     this.rendre.setStyle(element5,'position', 'relative');
      

  //   //   position: absolute;
  //   // top: -40px !important;
  //   // right: -50px !important;
      
  //    this.createCustomOption();

  //    setTimeout(() => {
  //     this.createCustomOption();
  //    }, 1000);
     
  //   }, 100);
  // }
  // createCustomOption(){
  //   return this.customOptions;
  }
  view_all(){
    this.route.navigate(['/layout/job-opening'])
  }
  openGallery(id:number){
    let dialogConfig:MatDialogConfig = {
      // maxHeight:"36rem",
      maxWidth:"80rem",
      data:id
    }

    this._dialog.open(GalaryDialogComponent,dialogConfig);

  }

}

