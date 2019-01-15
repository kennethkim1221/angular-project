import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router) {
    router.events.subscribe((a: NavigationEnd) => this.currentUrl = this.router.url);
    
    /*
    router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.currentUrl = event.url;
          console.log("Current URL: " + this.currentUrl);
        }
      });
*/
      // Working based on tutorial forums from Brandon
      // router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);


    // not working based on tutorial:  
    //router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url)
    //console.log("Current URL " + this.currentUrl);
   }

  ngOnInit() {
  }

}
