import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss']
})
export class BirthdayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  event_list = [
    {
      eventDescription:'In bangalore, first event is ',
      img: 'https://picsum.photos/900/500?random&t=1',

    },
    {
    
      eventDescription:'Dubai is another place ',
      img: 'https://picsum.photos/900/500?random&t=3',
      
    },
     {
      eventDescription:'In bangalore, first event is ',
      img: 'https://picsum.photos/900/500?random&t=4',
      
    },
     {
    
      eventDescription:'Singapore is another great hosting city',
      img: 'https://picsum.photos/900/500?random&t=6',
      
    },
    {
     
      eventDescription: 'Berlin is best place to hang on',
      img: 'https://picsum.photos/900/500?random&t=7',
     
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
