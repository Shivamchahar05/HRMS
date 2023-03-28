import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { delay, filter } from 'rxjs';
import { SIDE_NAV_ITEM } from 'src/app/constants/side_nav_links';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  panelOpenState=false
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  items:any
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  // element: HTMLElement;
  constructor(private observer: BreakpointObserver,private router: Router,private route:Router) { }

  ngOnInit(): void {
    this.items = SIDE_NAV_ITEM
  }
  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 1100px)'])
      .pipe(delay(1))
      .subscribe((res:any) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  logout(){
  this.route.navigate(['/account'])
  }
  my_profile(){
    this.route.navigate(['/layout/my-profile'])
  }

}
