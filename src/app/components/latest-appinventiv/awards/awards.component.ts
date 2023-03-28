import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  event_list = [
    {
      eventDescription:'Diksha Jaiswal (AI1764)',
      img: 'https://dashboard.appinventiv.com//uploads/profile/profile_1661255095.jpg',

    },
    {
    
      eventDescription:'Deepak Pokhriyal (AI1789) ',
      img: 'https://dashboard.appinventiv.com//uploads/profile/profile_1673950150.JPG',
      
    },
     {
      eventDescription:'Shailza Sondhi (AI1626)',
      img: 'https://dashboard.appinventiv.com//uploads/profile/profile_1656659952.jpeg',
      
    },
     {
    
      eventDescription:'Vishal Singh (AI1575)',
      img: 'https://dashboard.appinventiv.com//uploads/profile/profile_1647004207.jpeg',
      
    },
    {
     
      eventDescription: 'Raj Dixit (AI867)',
      img: 'https://dashboard.appinventiv.com//uploads/profile/profile_1597318247.jpg',
     
    },
  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },

    },
    // nav: true
  }

}
